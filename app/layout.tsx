import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andres Portfolio",
  description: "Portfolio of Andres Roncal – Computational Designer and Software Engineer with experience in web-based simulations, machine learning, and parametric design.",
};

// Suppress console warnings
if (typeof window !== "undefined") {
  const suppressedWarnings = [
    "Warning: Each child in a list",
    "React has been",
    "Minified React error",
    "Specifying 'overflow'",
  ];

  const originalConsoleError = console.error;

  console.error = (...args) => {
    if (!suppressedWarnings.some((warning) => args[0]?.includes(warning))) {
      originalConsoleError(...args);
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        </ThemeProvider>
      </body>
    </html>
  );
}
