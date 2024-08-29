import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <h1> Contact Us - Page</h1>
            <Link href={'/contact/team'}>team</Link>
        </div>
    )
}

export default page