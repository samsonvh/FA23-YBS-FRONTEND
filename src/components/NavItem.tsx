import { Link } from 'lucide-react'
import React from 'react'

const NavItem = (
    { name, href }: { name: string, href: string }
) => {
    return (
        <li>
            <Link href={href}>{name}</Link>
        </li>
    )
}

export default NavItem