import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { Header } from "./_components/header/header";
import StoreProvider from "./_store/storeProvider";
import { Footer } from "./_components/footer/footer";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

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
        <StoreProvider>
          <main className="container">{children}</main>
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
