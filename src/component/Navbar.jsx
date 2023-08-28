import React from 'react'
import Api from './Api'
import {TfiBook} from 'react-icons/tfi'
import {BsFillSuitSpadeFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
    <section id='body' className='bg-black'>
    <div className='flex justify-between'>
    <div className='text-red-100'>
      <TfiBook/></div>
    <div className='text-white'>ENGLISH</div>
    <div className='text-gray-100'><BsFillSuitSpadeFill/></div>
    <div className='text-red-500 '>DICTIONARY</div>
    </div>
    <Api/>
    </section>
    </>
  )
}

export default Navbar