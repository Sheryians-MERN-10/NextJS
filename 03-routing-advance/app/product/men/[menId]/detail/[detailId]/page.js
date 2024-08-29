import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            <h1>Details ID : {params.detailId} </h1>
            <p>Details about: {params.menId} </p>            
        </div>
    )
}

export default page