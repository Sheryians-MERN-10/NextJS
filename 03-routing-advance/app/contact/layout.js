import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <div>I am Layout Page</div>
            {children}
            <div>This is Layout - FOOTER</div>
            <h1>Layout.js is KING !</h1>
        </>
    )
}

export default layout