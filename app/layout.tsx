import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohan Kumar — AI & Data Portfolio",
  description: "Mohan Kumar is an AI & Data Analytics master's student and software developer in Germany, available for working student opportunities from December 2026.",
  keywords: ["Mohan Kumar", "AI", "Data Analytics", "Machine Learning", "Software Developer", "Working Student Germany"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
