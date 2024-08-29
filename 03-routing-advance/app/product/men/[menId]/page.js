import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
  return (
      <div>
          <h1>Men - Specific Product: {params.menId} </h1>

          <Link href={`/product/men/${params.menId}/detail`} className='btn2'>Details Page</Link>
    </div>
  )
}

export default page