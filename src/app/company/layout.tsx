import Navbar from "@/components/Navbar";
import "../globals.css";
import { Laila } from "next/font/google";
import NavItem from "@/components/NavItem";
const laila = Laila({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={laila.className}>
      <body className="flex">
        <div id="navbar" className="w-1/4">
          <Navbar />
        </div>
        <div id="main-content" className="w-3/4">
          {children}
        </div>
      </body>
    </html>
  );
}
