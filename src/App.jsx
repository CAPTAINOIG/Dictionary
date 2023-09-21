import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'


export const AppContext = createContext("")

function App() {
  const [font, setFont] = useState("Serif")
  const [theme, setTheme] = useState("light")
  
  
  useEffect(()=>{
   if(theme ==="dark"){
      document.documentElement.classList.add("dark")
    } else if ('serviceworker' in navigator) {
        window.addEventListener('load', ()=>{
            navigator.serviceWorker.register('/SW.js')
            .then(registration => {
                console.log('SW registered', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed', registrationError);
            })
        })
    }
         else{
            document.documentElement.classList.remove("dark")
          }
}, [theme])

  return (
    
    <AppContext.Provider value={{font, setFont, theme, setTheme}}>
      <div className={ ` dark:bg-black ${font === "Serif" ? "font-[Serif]" : font === "Montserrat" ? "font-[Montserrat]" : font === "Poppins" ? "font-[Poppins]" : font ===  "Noto Serif" ? "font-[Noto Serif]" : font === "Caprasimo" ? "font-[Caprasimo]" : font === "Calligraffitti" ? "font-[Calligraffitti]" : "font-[Calistoga]" }`}>    
      <Navbar />
      </div> 
    </AppContext.Provider>
    
  )
}

export default App
