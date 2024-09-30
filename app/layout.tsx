import { Metadata } from "next";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Nabil Mustofa Portofolio",
  description:
    "Portofolio profesional Nabil Mustofa menampilkan proyek dan keterampilan",
  keywords: [
    "Nabil Mustofa",
    "portofolio",
    "pengembang web",
    "pengembang perangkat lunak",
  ],
  authors: [{ name: "Nabil Mustofa" }],
  openGraph: {
    title: "Nabil Mustofa Portofolio",
    description:
      "Portofolio profesional Nabil Mustofa menampilkan proyek dan keterampilan",
    url: "https://www.nabilmustofa.my.id",
    siteName: "Nabil Mustofa Portofolio",
    images: [
      {
        url: "https://www.nabilmustofa.my.id/nabil-mustofa.png",
        width: 1200,
        height: 630,
        alt: "Nabil Mustofa Portofolio",
      },
    ],
    locale: "id_ID",
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
