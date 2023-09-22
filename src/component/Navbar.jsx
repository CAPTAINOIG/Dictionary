import React, { useContext, useState } from 'react'
import Api from './Api'
import { BiBookAlt } from 'react-icons/bi'
import { BiMoon } from 'react-icons/bi'
import {BsSun} from 'react-icons/bs'

import { AppContext } from '../App'






const Navbar = () => {
  const {setFont, setTheme, theme} = useContext(AppContext)
  

// console.log(theme);

  // {`${font === "Serif" ? "font-[Serif]" : "Montserrat" ? "font-[Montserrat]" : "Poppins" ? "font-[Poppins]" }`}
// console.log(font);


  return (
    <>
      <section className='dark:h-screen'>
        <div className='flex'>
          <div className='text-purple-500 lg:ms-[500px] ms-5 dark:text-red-100 mt-5'>
            <BiBookAlt />
          </div>

          <select className='lg:ms-[230px] ms-40 mt-5 text-purple-500 dark:text-red-500' onChange={(e) => setFont(e.target.value)}>
            <option value= "Serif">Serif</option>
            <option value= "Montserrat">Montserrat</option>
            <option value="Poppins">Poppins</option>
            <option value="Noto Serif">Noto Serif</option>
            <option value="Caprasimo">Caprasimo</option>
            <option value="Calligraffitti">Calligraffitti</option>
            <option value="Calistoga">Calistoga</option>
          </select>
          <div className='text-red-100 ms-2 mt-5 text-purple-500 dark:text-red-100 cursor-pointer'>
          {
            theme === "dark" ? <BsSun onClick={()=> setTheme("light")}/> : <BiMoon className='text-purple-500' onClick={() => setTheme("dark")} />
          }
          
          
          </div>
        </div> 



        <Api />
      </section>
    </>
  )
}

export default Navbar