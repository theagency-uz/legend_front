import type { Metadata } from "next";
import localFont from "next/font/local";

import "../../globals.css";

import Navbar from "../../../components/site/common/navbar.component";
import Footer from "@/components/site/common/footer.component";

const inter = localFont({
  src: [
    {
      path: "../../../../public/fonts/Inter-VariableFont_slnt,wght.ttf",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter relative`}>
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}