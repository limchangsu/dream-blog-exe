import React from 'react'
import Link from 'next/link'

export default function Navbarpage() {
  return (
    <div className='flex flex-row content-between'>
      <div>
      <Link href={'./'}><p className='m-3 p-3'>home   </p></Link>
      </div>
      <div className='flex flex-row '>
      <Link href={'./about'}><p className='m-3 p-3'>about page</p></Link>
      <Link href={'./posts'}><p className='m-3 p-3'>   post page</p></Link>
      <Link href={'./contact'}><p className='m-3 p-3'>   contact page</p></Link>
      </div>
    </div>
  )
}
