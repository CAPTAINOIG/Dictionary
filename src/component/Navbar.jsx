import React, { useState } from 'react'
import Api from './Api'
import {TfiBook} from 'react-icons/tfi'
import {BsFillSuitSpadeFill} from 'react-icons/bs'
import {BiMoon} from 'react-icons/bi'
import {BsSun} from 'react-icons/bs'




const Navbar = () => {
  const [theme, setTheme] = useState("")

  


  return (
    <>
    <section id='body' className='bg-black'>
    <div className='flex justify-between'>
    <div className='text-red-100'>
      <TfiBook/></div>
    <div className='text-white'>ENGLISH</div>
    <div className='text-gray-100'><BsFillSuitSpadeFill/></div>
    <div className='text-red-500 '>DICTIONARY</div>
    <div className='text-red-100' onClick={()=>setTheme("light")}>
      <BiMoon/>
    </div>

    <div className='text-red-100' onClick={()=>setTheme("dark")}>
      <BsSun/>
    </div>
    </div>

    
    
    <Api/>
    </section>
    </>
  )
}

export default Navbar