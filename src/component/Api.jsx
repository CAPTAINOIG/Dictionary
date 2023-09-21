import axios from 'axios'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'




// <audio className='mx-auto' controls>
// <source src={detail[0].phonetics[0].audio}></source>
// </audio>
const Api = () => {
    const [info, setInfo] = useState("")
    const [detail, setDetail] = useState(null)
    const [message, setMessage] = useState("")


    let endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${info}`

    const handleSubmit = (e) => {
        e.preventDefault()
        if(info === ""){
            setMessage("Input cannot be empty")
            setDetail("")
        } else{
            axios.get(endpoint)
            .then((response) => {  
                console.log(response.data);
                setDetail(response.data)
                setMessage("")
                setInfo("")

                
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.message);
                setMessage(err.response.data.message);
                setDetail("")
                setInfo("")
                
                
            })
        }
    }


    return (
        <div className=''>
        <form onSubmit={handleSubmit}>
        <div className='flex justify-center w-[350px] p-1 items-center bg-green-100 gap-10 px-5 rounded mx-auto mt-5' >
        <input className='bg-transparent outline-none' type="text" placeholder='keyword...' onChange={(e) => setInfo(e.target.value)} value={info} />
                <button type='submit' className='text-purple-500 dark:text-red-500 cursor-pointer'   id='butto'><BsSearch /></button>
            </div>
            <div className='text-purple-500 dark:text-red-500 text-center mt-5'>
            
            {message}
            </div>
        </form>
             

            {
                detail &&
                <>
                    <div className='dark:text-white pt-5'>
                        <h1 className='text-white-500 text-4xl ms-2 lg:ms-[500px] dark:text-white'><b> {detail[0].word}</b></h1>
                        <h1 className='text-white-500 lg:ms-[500px] ms-2'><b> {detail[0].phonetic}</b></h1>
                        
                        <hr />
                        <ul className='lg:w-[700px] lg:ms-32'>
                            {
                                detail[0].meanings[0].definitions.map((item, index) => (

                                    <p key={index} id='p' className='text-white-900 lg:ms-96 mt-4'>● {item.definition}</p>

                                ))
                            }
                        </ul>

                        <h1 className='text-white-500 mt-2 lg:ms-[520px] dark:bg-black dark:text-white'> Part Of Speech: {detail[0].meanings[0].partOfSpeech}</h1>
                        <h1 className='text-white-500 lg:ms-[520px] mt-2 dark:bg-black dark:text-white' id='p'> 
                        
                        { detail[0].meanings[0].synonyms.length > 0 &&
                          <div className='lg:w-[400px]'><span>Synonyms:</span>  {detail[0].meanings[0].synonyms.map((item, index)=> (
                                <span key={index}>{item}, </span>
                                ))} 
                                </div>

                        }
                        </h1>

                        <h1 className='text-white-500 lg:ms-[520px] mt-2 dark:text-white lg:dark:bg-black' id='p'> 
                        { detail[0].meanings[0].antonyms.length > 0 &&
                        <div>
                        <span>Antonyms:</span> {detail[0].meanings[0].antonyms.map((item, index)=> (
                            <span key={index}>{item}, </span>
                            ))}
                            </div>
                        }
                      </h1> 
                        </div>
                        
                        
                </>
            }
            
            </div>
            )
        }
        
        export default Api