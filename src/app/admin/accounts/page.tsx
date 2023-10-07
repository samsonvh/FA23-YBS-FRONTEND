"use client"
import { selectNavItem } from '@/lib/utils';
import React, { useEffect } from 'react'


const accounts_page = () => {
  useEffect(() => {
    selectNavItem(document, "accounts");
  });

  return (
    <div>accounts</div>
  )
}

export default accounts_page