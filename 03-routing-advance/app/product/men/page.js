'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <h1>MEN's Collection</h1>

            <form action={`/product/men/${value}`}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='py-3 px-4 text-2xl font-semibold text-teal-500 m-12 bg-slate-300' />
                <button type='submit' className='px-5 p-3 bg-indigo-500 font-bold' >Submit</button>
            </form>
            
            <Link href={'/product'} className='m-12 px-5 py-3 bg-amber-500' >🔙 Go Back</Link>
        </div>
    )
}

export default page