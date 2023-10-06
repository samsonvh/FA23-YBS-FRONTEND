import Link from 'next/link'
import React from 'react'

const NavItem = (
    { name, href }: { name: string, href: string }
) => {
    return (
        <li className="font-semibold block mr-6 rounded-r-full lg:text-xs xl:text-xl
        hover:bg-white hover:text-[#D8A93F] hover:border-l-0 hover:border hover:border-[#D8A93F] hover:text-right">
            <Link href={href} className='block px-6 py-5 '>{name}</Link>
        </li>
    )
}

export default NavItem