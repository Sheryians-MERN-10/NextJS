import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            <h1>Details about: {params.menId}</h1>
        </div>
    )
}

export default page