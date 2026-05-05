import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "VitalFlw | Clinic Management System",
  description: "The future of clinic workflows is loading. Join the waitlist.",
  icons: {
    icon: [
      { url: "/logo.svg" },
      { url: "/logo.svg", sizes: "any", type: "image/svg" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} ${styles.htmlRoot}`}
    >
      <body className={styles.body}>{children}</body>
    </html>
  );
}
