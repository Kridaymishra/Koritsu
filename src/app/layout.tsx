import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koritsu | Adaptive Execution & Crisis Management",
  description: "Adaptive execution & crisis management for productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
