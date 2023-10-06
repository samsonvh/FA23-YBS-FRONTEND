import "./globals.css";
import type { Metadata } from "next";
import { Laila } from "next/font/google";

const laila = Laila({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yacht Booking System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={laila.className}>{children}</body>
    </html>
  );
}
