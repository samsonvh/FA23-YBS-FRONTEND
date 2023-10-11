"use client"
import React from 'react'
import { Button } from '../ui/button'
import { openNavMobile } from '@/lib/utils'
import MenuBtn from 'public/icons/feather/menu.svg'

const MenuButton = () => {
    return (
        <Button id="menu-btn" onClick={openNavMobile} className='sm:hidden w-4/6 rounded-none aspect-square hover:bg-transparent' variant="ghost" size="icon">
            <MenuBtn color="white"/>
        </Button>
    )
}

export default MenuButton