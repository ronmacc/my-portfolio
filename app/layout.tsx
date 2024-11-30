import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

// Define metadata as a plain JavaScript object
const metadata = {
  title: "Andres Roncal Portfolio",
  description: "Portfolio of Andres Roncal | Computational Designer and Software Engineer with experience in AI and Web Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { title, description } = metadata; // Destructure title and description from metadata

  return (
    <html lang="en">
      <head>
        {/* Global Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.andresroncal.com/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.andresroncal.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.andresroncal.com/path-to-your-image.jpg" />
      </head>
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
