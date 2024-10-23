import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "./fonts";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "AI Startup Landing Page",
  description: "A landing page for an AI startup created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          `${interFont.className}`,
          "antialiased bg-black text-white",
        )}
      >
        {children}
      </body>
    </html>
  );
}
