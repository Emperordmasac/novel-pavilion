import { Inter as FontSans } from "@next/font/google";

import "styles/globals.css";

import { cn } from "@/lib/utils";
import Head from "./head";
import { Toaster } from "@/components/ui/toast";
import { Help } from "@/components/help";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      <Head />
      <body className="min-h-screen">
        {children}
        <Analytics />
        <Help />
        <Toaster position="bottom-right" />
        <TailwindIndicator />
      </body>
    </html>
  );
}
