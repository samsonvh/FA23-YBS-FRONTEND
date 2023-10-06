import Link from "next/link";
import React, { ReactNode } from "react";

const Navbar = (
  { children }: { children: ReactNode }
) => {
  return (
    <div id="navbar-background" className="bg-[#0B4D8F] shadow-xl h-screen text-white">
      <div id="navbar-content" className="h-full">
        <div id="logo-container" className="h-[12%] p-6">
          <div id="logo" className="bg-slate-200 w-auto h-full"></div>
        </div>
        <div id="user-container" className="flex items-center h-[8%] px-6 py-2 lg:text-xs xl:text-xl">
          <div id="avatar" className="flex-none bg-slate-900 w-auto h-full aspect-square rounded-full mr-2"></div>
          <p id="welcome-user" className="flex-auto">Welcome,<br /><span id="user" className="font-semibold">Admin</span></p>
          <Link href={"/"} className="flex-none hover:underline mr-3">Log out</Link>
        </div>
        <ul id="navlist" className="h-4/5 block mt-4">{children}</ul>
      </div>
    </div>
  );
};

export default Navbar;
