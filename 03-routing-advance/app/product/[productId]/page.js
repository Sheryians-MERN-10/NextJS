import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
  return (
      <div>
          <h1>ProductID: {params.productId} </h1>

          <Link href={'/product'} className='m-12 px-5 py-3 bg-amber-500' >🔙 Go Back</Link>
    </div>
  )
}

export default page