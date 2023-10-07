"use client"
import { selectNavItem } from '@/lib/utils';
import React, { useEffect } from 'react'

const companies_page = () => {
    useEffect(() => {
        selectNavItem(document, "companies");
    });

    return (
        <div>companies_page</div>
    )
}

export default companies_page