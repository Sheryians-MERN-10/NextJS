import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-around text-2xl bg-slate-700 py-5 text-white'>
            <h2 className='font-extrabold'>LOGO</h2>
            <div className='flex space-x-12 '>
                <Link href="/" className='cursor-pointer font-semibold' >Home</Link>
                <Link href="/product" className='cursor-pointer font-semibold' >Product</Link>
                <Link href="/service" className='cursor-pointer font-semibold' >Services</Link>
                <Link href="/contact" className='cursor-pointer font-semibold' >Contact</Link>
            </div>
        </div>
    )
}

export default Navbar