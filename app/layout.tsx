import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

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

export const metadata: Metadata = {
  title: "Aarthi A P | Software Developer",
  description: "Portfolio of Aarthi A P — CS graduate specializing in React, Java, Spring Boot, and Full Stack development.",
  keywords: ["Aarthi A P", "Software Developer", "React", "Java", "Spring Boot", "Portfolio", "Full Stack"],
  openGraph: {
    title: "Aarthi A P | Software Developer",
    description: "Portfolio of Aarthi A P — CS graduate specializing in React, Java, Spring Boot, and Full Stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#09090B] text-white antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          <CursorFollower />
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
