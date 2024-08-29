import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='text-pink-500'>WOMEN's Collection</h1>

            <Link href={'/product'} className='m-12 px-5 py-3 bg-pink-500' >🔙 Go Back</Link>
        </div>
    )
}

export default page