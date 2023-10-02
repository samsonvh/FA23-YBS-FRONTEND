import "./globals.css";
import type { Metadata } from "next";
import { Laila } from "next/font/google";
const laila = Laila({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "YBS Management Portal",
  description: "YBS Management Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={laila.className}>
      <body>{children}</body>
    </html>
  );
}
