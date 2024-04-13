import DescriptionB from '@/components/description-b'
import Link from 'next/link'
import React from 'react'

const description = () => {
  return (
    <>
    <h1 className="m-20 text-3xl font-bold text-black text-center">BENEFITS</h1>
    <DescriptionB />
    <Link className='m-5' href={"/description/description-c"}><button className="btn btn-primary mb-10">Next</button></Link>

    </>
  )
}

export default description