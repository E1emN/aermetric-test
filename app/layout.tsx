import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { Header } from "./_components/header/header";

const roboto = Roboto({ weight: ["400"] });

export const metadata: Metadata = {
  title: "Aermetric test"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
