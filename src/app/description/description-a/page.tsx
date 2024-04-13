import DescriptionA from '@/components/description-a'
import Link from 'next/link'
import React from 'react'

const description = () => {
  return (
    <> 
    <h1 className="m-20 text-3xl font-bold text-black text-center">PRODUCT DESCRIPTION</h1>
    <DescriptionA />
    <Link className="m-5" href={"/description/description-b"}><button className="btn btn-primary mb-10">Next</button></Link>
    </>
  )
}

export default description