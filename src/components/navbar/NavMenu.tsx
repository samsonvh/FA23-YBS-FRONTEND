import React, { ReactNode } from 'react'

const NavMenu = ({ children }: { children: ReactNode }) => {
    return (
        <div id='nav-menu' className='absolute top-16 right-0 w-0 sm:w-full h-[calc(100vh-4rem)] bg-[#0B4D8F] transition-all duration-300'>
            <ul id="nav-list" className='space-y-2'>{children}</ul>
        </div>
    )
}

export default NavMenu