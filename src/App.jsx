import { useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'


function App() {
 
  useEffect(()=>{
    if ('serviceworker' in navigator) {
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
}, [])

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
