import { ReactNode } from "react";
import Avatar from "/public/avatar.png";
import Image from "next/image";

const Navbar = (
  { navlist, username }: { navlist: ReactNode, username: string }
) => {
  return (
    <div id="navbar-background" className="bg-[#0B4D8F] h-screen">
      <div id="logo-container" className="flex justify-center py-6 max-h-[12%]">
        <h1 className="font-bold text-white w-fit lg:text-xl xl:text-3xl">YBS Management Portal</h1>
      </div>
      <div id="user-container" className="flex items-center lg:px-6 xl:px-10 h-[8%]">
        <Image id="avatar" className="rounded-full h-3/5 w-auto" src={Avatar} alt="Avatar" />
        <p className="ml-3 text-white">
          Welcome, <span className="font-bold">{username}</span>
        </p>
      </div>
      <ul id="navlist" className="h-4/5">
        {navlist}
      </ul>
    </div>
  );
};

export default Navbar;
