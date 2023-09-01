import React, { useContext, useState } from 'react'
import Api from './Api'
import { BiBookAlt } from 'react-icons/bi'
import { BiMoon } from 'react-icons/bi'


import { AppContext } from '../App'






const Navbar = () => {
  const {setFont} = useContext(AppContext)
  const {setTheme} = useContext(AppContext)



  // {`${font === "Serif" ? "font-[Serif]" : "Montserrat" ? "font-[Montserrat]" : "Poppins" ? "font-[Poppins]" }`}
// console.log(font);


  return (
    <>
      <section id='body'>
        <div className='flex'>
          <div className='text-red-100 mt-5' id='red'>
            <BiBookAlt /></div>

          <select id='redd' className='w-30 mt-5' onChange={(e) => setFont(e.target.value)}>
            <option value= "Serif">Serif</option>
            <option value= "Montserrat">Montserrat</option>
            <option value="Poppins">Poppins</option>
            <option value="Noto Serif">Noto Serif</option>
            <option value="Caprasimo">Caprasimo</option>
            <option value="Calligraffitti">Calligraffitti</option>
            <option value="Calistoga">Calistoga</option>
          </select>
          <div className='text-red-100 ms-2 mt-5'>
          <button onClick={() => setTheme("light")}><BiMoon /></button> 
          </div>
        </div>



        <Api />
      </section>
    </>
  )
}

export default Navbar