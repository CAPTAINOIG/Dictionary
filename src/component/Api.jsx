import axios from 'axios'
import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'




// <audio className='mx-auto' controls>
// <source src={detail[0].phonetics[0].audio}></source>
// </audio>
const Api = () => {
    const [info, setInfo] = useState("")
    const [detail, setDetail] = useState(null)
    const [message, setMessage] = useState("")
    let endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${info}`
    const get =()=>{
        axios.get(endpoint)
        .then((response)=>{
            if(info == ""){
                setMessage("word not found")
                console.log("enter");
            } else{
                console.log(response.data);
                setDetail(response.data)
            }
            setInfo("")
            
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.response.data.message);
            setMessage(err.response.data.message);
            setDetail("")
            
        })
    }



        

    return (
        <>
        <div className='flex justify-center mt-5'>
        <input className='w-96 rounded' type="text" placeholder='keyword' onChange={(e)=> setInfo(e.target.value)} value={info} />
        <div className='bg-white w-6 h-7 '>
        <button onClick={get}>
        <BsSearch/>
        </button>
        </div>
        </div>
        <div className='text-white'>
        
        {message}
        </div>
        
        {
            detail && 
            <>
            <div className='text-center pt-5'>
            <h1 className='text-white'><b>🌳 {detail[0].word}</b></h1>
            <hr />
            {
                detail[0].meanings[0].definitions.map((item, index)=>(
                    <div key={index}>
                    <h1 className='text-white'>🌳 {item.definition}</h1>
                    </div>
                    ))
                }
               
                <h1 className='text-yellow-300'>🌳 Part Of Speech: {detail[0].meanings[0].partOfSpeech}</h1>
               
            </div>
                       
                      
            </>
        }
       
    </>
  )
}

export default Api