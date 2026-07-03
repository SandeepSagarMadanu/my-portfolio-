import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandeep Sagar Madanu | AI Engineer & Data Scientist Portfolio",
  description: "Portfolio of Sandeep Sagar Madanu - AI Engineer, ML Engineer, and Data Scientist specializing in Explainable AI (XAI), Vision Transformers (ViT), and Agentic LLM Architectures.",
  keywords: [
    "Sandeep Sagar Madanu",
    "Data Scientist",
    "AI Engineer",
    "Machine Learning Engineer",
    "Explainable AI",
    "Vision Transformers",
    "Radiology Deep Learning",
    "LangGraph Agent",
    "FastAPI",
    "PyTorch"
  ],
  authors: [{ name: "Sandeep Sagar Madanu" }],
  creator: "Sandeep Sagar Madanu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandeepmadanu.netlify.app",
    title: "Sandeep Sagar Madanu | AI Engineer & Data Scientist Portfolio",
    description: "Explore the advanced AI Operating System portfolio of Sandeep Sagar Madanu, detailing medical imaging analytics, agent systems, and Explainable AI research.",
    siteName: "Sandeep Sagar Madanu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Sagar Madanu | AI Engineer Portfolio",
    description: "Building production-grade deep learning systems and Explainable AI workflows.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Metadata for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sandeep Sagar Madanu",
    "jobTitle": "AI Engineer & Data Scientist",
    "url": "https://sandeepmadanu.netlify.app",
    "sameAs": [
      "https://github.com/SandeepSagarMadanu",
      "https://linkedin.com/in/madanusandeep-sagar"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Deep Learning",
      "Explainable AI",
      "Vision Transformers",
      "Large Language Models",
      "Computer Vision",
      "Data Science"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Disable browser scroll restoration — always open at the top */}
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0);" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen text-white relative">
        {/* ── Global Fixed Background Image ── */}
        <div className="fixed inset-0 z-[-10]">
          <Image
            src="/hero-image.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark overlay so text stays readable across the site */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(9,9,11,0.82) 0%, rgba(9,9,11,0.65) 50%, rgba(9,9,11,0.78) 100%)",
            }}
          />
        </div>

        {/* Cinematic Background Film Grain noise overlay */}
        <div className="noise-bg fixed inset-0 pointer-events-none z-[-9]" />
        
        {/* Animated radial aurora glow layers */}
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />

        {children}
      </body>
    </html>
  );
}
