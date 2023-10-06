import Navbar from "@/components/Navbar";
import "../globals.css";
import { Laila } from "next/font/google";
import NavItem from "@/components/NavItem";
const laila = Laila({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navlist = () =>{
  return (
    <>
      <NavItem name="Accounts" href="admin/accounts"/>
      <NavItem name="Companies" href="admin/companies"/>
      <NavItem name="Members" href="admin/members"/>
      <NavItem name="Membership Packages" href="admin/membership-packages"/>
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={laila.className}>
      <body className="flex">
        <div className="w-1/4">
          <Navbar navlist={<Navlist/>}/>
        </div>
        <div className="w-3/4">{children}</div>
      </body>
    </html>
  );
}
