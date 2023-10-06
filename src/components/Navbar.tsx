import Avatar from "/public/avatar.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-blue-900 h-screen">
      <div id="content" className="flex flex-col px-5 py-10 text-white">
        <h1 className="font-semibold text-3xl text-center h-20">
          YSB Management Portal
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={Avatar} alt="Avatar" />
            <p className="ml-3">Welcome, user</p>
          </div>
          <div>
            <Link href={"/"}>Log out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
