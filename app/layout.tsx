import { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nabilmustofa.my.id"),
  title: "Nabil Mustofa | Fullstack Engineer Portfolio",
  description:
    "Professional portfolio of Nabil Mustofa, a Fullstack Engineer specializing in building scalable web and mobile applications with Next.js, React Native, Laravel, and Flask.",
  icons: {
    icon: "/hero-icon.png",
    shortcut: "/hero-icon.png",
    apple: "/hero-icon.png",
  },
  keywords: [
    "Nabil Mustofa",
    "Fullstack Engineer",
    "Fullstack Developer",
    "Software Engineer",
    "Web Developer",
    "React Native",
    "Next.js",
    "Laravel",
  ],
  authors: [{ name: "Nabil Mustofa" }],
  openGraph: {
    title: "Nabil Mustofa | Fullstack Engineer Portfolio",
    description:
      "Explore the software engineering projects and fullstack capabilities of Nabil Mustofa, featuring high-performance web and mobile solutions.",
    url: "https://www.nabilmustofa.my.id",
    siteName: "Nabil Mustofa Portfolio",
    images: [
      {
        url: "https://www.nabilmustofa.my.id/nabil-mustofa.png",
        width: 1200,
        height: 630,
        alt: "Nabil Mustofa Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} font-sans bg-neutral-950`}>
        {children}
      </body>
    </html>
  );
}
