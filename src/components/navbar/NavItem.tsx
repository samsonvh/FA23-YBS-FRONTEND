import Link from 'next/link'
import React from 'react'

const NavItem = ({id, name }: {id:string, name: string }) => {
  return (
    <li><Link id={id} href="/{id}" className='block text-white px-8 py-4'>{name}</Link></li>
  )
}

export default NavItem