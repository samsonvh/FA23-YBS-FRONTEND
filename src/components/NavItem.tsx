import Link from 'next/link'
import React from 'react'

const NavItem = (
    { id, name, href }: { id:string, name: string, href: string }
) => {
    return (
        <li id={id} className="font-semibold block mr-6 rounded-r-full lg:text-base xl:text-xl hover:text-[#D8A93F]">
            <Link href={href} className='block px-6 lg:py-3 xl:py-5 '>{name}</Link>
        </li>
    )
}

export default NavItem