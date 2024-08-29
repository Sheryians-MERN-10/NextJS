'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Product Page</h1>
      <div>
        <Link href={'/product/men'} className='btn1'>MEN</Link>
        <Link href={'/product/women'} className='btn1'>WOMEN</Link>
      </div>
      <form action={`/product/${value}`}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='py-3 px-4 text-2xl font-semibold text-teal-500 m-12 bg-slate-300' />
        <button type='submit' className='px-5 p-3 bg-indigo-500 font-bold' >Submit</button>
      </form>
    </div>
  )
}

export default page