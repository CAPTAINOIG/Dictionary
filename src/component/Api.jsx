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

    const get = () => {
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


    return (
        <>
        
        <div className='flex justify-center items-center bg-green-100 gap-20 px-5 rounded mx-auto mt-5' id='input'>
        <input className='bg-transparent w-96' type="text" placeholder='keyword' onChange={(e) => setInfo(e.target.value)} value={info} />
                <BsSearch onClick={get} className='text-purple-500 dark:text-red-500 cursor-pointer' id='butto' />
            </div>
            <div className='text-purple-500 dark:text-red-500 text-center mt-5'>
            
            {message}
            </div>
            

            {
                detail &&
                <>
                    <div className='text-center dark:text-white pt-5'>
                        <h1 className='text-white-500 text-4xl dark:text-white'><b> {detail[0].word}</b></h1>
                        <h1 className='text-white-500'><b> {detail[0].phonetic}</b></h1>

                        <hr />
                        <ul>
                            {
                                detail[0].meanings[0].definitions.map((item, index) => (

                                    <p key={index} id='p' className='text-white-900 list-disc text-center mx-auto'>● {item.definition}</p>

                                ))
                            }
                        </ul>

                        <h1 className='text-white-500'> Part Of Speech: {detail[0].meanings[0].partOfSpeech}</h1>
                        <h1 className='text-white-500 mx-auto' id='p'> Synonyms: {detail[0].meanings[0].synonyms.map((item, index)=> (
                            <span key={index}>{item}, </span>
                        ))}
                        </h1>
                        <h1 className='text-white-500 mx-auto dark:text-white dark:bg-black' id='p'> Antonyms: {detail[0].meanings[0].antonyms.map((item, index)=> (
                            <span key={index}>{item}, </span>
                        ))}
                        </h1>
                        </div>
                        
                        
                </>
            }
            
            </>
            )
        }
        
        export default Api