import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Andres Porfolio",
  description: "Portfolio of Andres Roncal – Computational Designer and Software Engineer with experience in web-based simulations, machine learning, and parametric design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider></body>
    </html>
  );
}
