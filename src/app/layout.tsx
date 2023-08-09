import "../styles/globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novel Pavilion",
  description: "Your number source of wuuxia novels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firacode.className}>
      <body>{children}</body>
    </html>
  );
}
