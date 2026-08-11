import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingButton from "./components/FloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KP Global Shipping Inc.",
  description:
    "Quick, Prompt, and Stand-beside YOU. Reliable maritime services throughout the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full pb-12">
        {children}

        {/* Floating Request Quote */}
        <FloatingButton />

        {/* Fixed Statistics Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-blue-950/95 backdrop-blur-sm border-t border-yellow-400/30 shadow-2xl">
          <div className="max-w-7xl mx-auto px-3 py-2">

            {/* Mobile */}
            <div className="flex md:hidden items-center justify-center gap-2 text-center whitespace-nowrap">
              <span className="text-xs font-extrabold text-yellow-400">
                24/7
              </span>

              <span className="text-blue-300">•</span>

              <span className="text-xs font-extrabold text-yellow-400">
                100+ Ports
              </span>

              <span className="text-blue-300">•</span>

              <span className="text-xs font-extrabold text-yellow-400">
                365 Days
              </span>

              <span className="text-blue-300">•</span>

              <span className="text-xs font-extrabold text-yellow-400">
                Fast Response
              </span>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-4 gap-6 text-center">

              <div>
                <p className="text-xl font-extrabold text-yellow-400">
                  24/7
                </p>
                <p className="text-sm text-blue-100">
                  Operations Support
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-yellow-400">
                  100+
                </p>
                <p className="text-sm text-blue-100">
                  Philippine Ports
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-yellow-400">
                  365
                </p>
                <p className="text-sm text-blue-100">
                  Days Available
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-yellow-400">
                  Fast
                </p>
                <p className="text-sm text-blue-100">
                  Response Time
                </p>
              </div>

            </div>

          </div>
        </div>
      </body>
    </html>
  );
}