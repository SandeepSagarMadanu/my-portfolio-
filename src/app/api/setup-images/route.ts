import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const filesToCopy = [
      {
        source: "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e83e646e-d7d8-4e3f-88c9-7bed08141169\\media__1783018034261.jpg",
        targetName: "hero-image.jpg"
      },
      {
        source: "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e83e646e-d7d8-4e3f-88c9-7bed08141169\\media__1783017114404.png",
        targetName: "hacker-bg.png"
      },
      {
        source: "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\e83e646e-d7d8-4e3f-88c9-7bed08141169\\media__1783015920983.jpg",
        targetName: "hero-photo.png"
      }
    ];

    const results = [];
    for (const item of filesToCopy) {
      const targetPath = path.join(publicDir, item.targetName);
      if (fs.existsSync(item.source)) {
        fs.copyFileSync(item.source, targetPath);
        results.push({ name: item.targetName, status: "copied" });
      } else {
        results.push({ name: item.targetName, status: `source not found: ${item.source}` });
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
