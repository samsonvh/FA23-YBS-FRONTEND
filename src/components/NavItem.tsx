import Link from 'next/link'
import React from 'react'

const NavItem = (
    { name, href }: { name: string, href: string }
) => {
    return (
        <li className='text-white px-8 py-4'>
            <Link href={href}>{name}</Link>
        </li>
    )
}

export default NavItem