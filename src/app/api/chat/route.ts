import { NextRequest, NextResponse } from "next/server";
import { searchKnowledgeBase } from "@/lib/rag-data";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "Missing messages parameter" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage.content || "";

    // Perform vector-like lookup in Sandeep's credentials
    const searchResult = searchKnowledgeBase(userQuery);

    // Call public inference API if a valid API key exists, otherwise return a simulated AI completion
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const hasValidKey = apiKey && apiKey.length > 10 && !apiKey.includes("YOUR_");

    if (hasValidKey) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000); // 6 seconds timeout

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `You are the AION-OS System Daemon representing Sandeep Sagar Madanu, an AI Engineer. 
                      Answer the user's query professionally, concisely, and dynamically in the first-person perspective on behalf of Sandeep.
                      Use the following verified context from Sandeep's records:
                      
                      [CONTEXT]: ${searchResult}
                      
                      Query: ${userQuery}`
                    }
                  ]
                }
              ],
              generationConfig: {
                maxOutputTokens: 250,
                temperature: 0.7,
              }
            }),
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Gemini API returned status ${response.status}`);
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message || "Gemini API error");
        }

        const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (generatedText) {
          return NextResponse.json({ content: generatedText });
        }
      } catch (err) {
        console.warn("External AI Inference failed or timed out, falling back to local engine:", err);
      }
    }

    // High quality mock response simulating typewriter output
    let answer = "";
    const lowerQuery = userQuery.toLowerCase();
    
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      answer = "Greetings. I am AION-OS, Sandeep Sagar's virtual system daemon. How may I assist you with checking my machine learning models, research timeline, or credentials?";
    } else {
      // Dynamic synthesis
      answer = searchResult;
    }

    // Add a 500ms delay to make it feel like a real neural compilation
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ content: answer });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
