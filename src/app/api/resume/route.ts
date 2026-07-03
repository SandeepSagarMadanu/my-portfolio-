import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const targetPath = path.join(publicDir, "Sandeep_Sagar_Madanu_Resume.pdf");

    if (!fs.existsSync(targetPath)) {
      // Ensure public directory exists
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Source path in the artifacts folder
      const sourcePath = "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e83e646e-d7d8-4e3f-88c9-7bed08141169\\media__1783011802480.pdf";
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
      } else {
        return NextResponse.json({ error: "Source resume file not found" }, { status: 404 });
      }
    }

    const fileBuffer = fs.readFileSync(targetPath);
    
    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=\"Sandeep_Sagar_Madanu_Resume.pdf\"",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to serve resume" }, { status: 500 });
  }
}
