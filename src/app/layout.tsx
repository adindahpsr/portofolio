import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adinda Aulia H",
  description:
    "Portfolio of Adinda Aulia H, a frontend developer crafting clean, performant digital experiences.",
  openGraph: {
    title: "Adinda Aulia H",
    description: "Crafting clean, performant digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
