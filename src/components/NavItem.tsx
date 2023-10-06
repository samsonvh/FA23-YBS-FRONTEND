import Link from 'next/link'
import React from 'react'

const NavItem = (
  { name, href }: { name: string, href: string }
) => {
  return (
    <li className='text-white lg:px-6 xl:px-10 py-4 font-semibold lg:text-base xl:text-2xl'>
      <Link href={href}>{name}</Link>
    </li>
  )
}

export default NavItem