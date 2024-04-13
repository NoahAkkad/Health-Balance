import DescriptionC from '@/components/description-c'
import Link from 'next/link'
import React from 'react'

const description = () => {
  return (
    <>
    <h1 className="m-20 text-3xl font-bold text-black text-center">MARKET</h1>
    <DescriptionC />
    <Link className='m-5' href={"/description/contact"}><button className="btn btn-primary mb-10">Contact Us</button></Link>
    </>
  )
}

export default description