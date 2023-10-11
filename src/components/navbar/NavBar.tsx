import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import NavMenu from './NavMenu';

const MenuButton = dynamic(
  () => import("@/components/navbar/MenuButton"),
  { ssr: false },
);

const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <div id='navbar-container' className='flex justify-center sm:w-1/6 h-16 sm:h-screen bg-[#0B4D8F] drop-shadow-md'>
      <div className="blank h-full aspect-square"></div>
      <div
        id="logo-container"
        className="m-auto bg-white h-full w-2/4"
      >LOGO</div>
      <div id="menu-btn-container" className='sm:hidden flex justify-center items-center h-full aspect-square'>
        <MenuButton />
      </div>
      <NavMenu>{children}</NavMenu>
    </div>
  )
}
export default NavBar