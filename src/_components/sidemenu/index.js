import Link from 'next/link'
import React from 'react'

export default function SideMenu() {
  return (
    <div>
    <nav className='nav flex-column'>
        <Link className='nav-link' href='/about'>About</Link>
        <Link className='nav-link' href='/about/mision'>Mision</Link>
        <Link className='nav-link' href='/about/vision'>Vision</Link>
    </nav>
    </div>
  )
}
