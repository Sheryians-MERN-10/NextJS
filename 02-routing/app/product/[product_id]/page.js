import React from 'react'

const page = ({params}) => {
  return (
      <div>
      <h1>Product Page with <br />ID : {params.product_id} </h1>
    </div>
  )
}

export default page