import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-around items-center font-semibold text-xl bg-slate-700 text-white'>
        <h2>LOGO </h2>        
        <div className='flex space-x-12'>
          <Link href='/'        className='hover:bg-teal-500 px-5 py-5 cursor-pointer'>Home</Link>
          <Link href='/product' className='hover:bg-teal-500 px-5 py-5 cursor-pointer'>Product</Link>
          <Link href='/contact' className='hover:bg-teal-500 px-5 py-5 cursor-pointer'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar