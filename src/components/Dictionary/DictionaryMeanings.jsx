import React from 'react'
import MeaningItem from './MeaningItem'
import ExternalLogo from '../ExternalLogo'
function DictionaryMeanings({word,meaningsData,isError}) {
  return (
    <div className="meanings-wrapper text-white">
        {isError && <h6 className='text-center'>Sorry No results Found.Try again</h6>}
       {!word && !isError && <h6 className='text-center'>Start Typing To know the Meaning</h6>}
        {meaningsData &&!isError && <section className='mt-3 p-2'>
            {meaningsData.audio && <div className="word-pronunciation mt-2">
                <span className='me-2 fs-3'>Prounication</span>
                <audio controls src={meaningsData.audio}>
                    Your Browser doesnt support audio
                </audio>
            </div> }
            {
                meaningsData.synonyms?.length>0 && <div className='my-3 fs-4'>Synonyms: {meaningsData.synonyms.join(",")}</div>
            }
            {
                meaningsData.antonyms?.length>0 && <div className='fs-4'>Antonyms: {meaningsData.antonyms.join(",")}</div>
            }
            {
                meaningsData.wordUrl&& <a href={meaningsData.wordUrl} target="_blank" rel="noreferrer" className="text-decoration-none text-white">Know More
                    <span className='ms-1'>
                      <ExternalLogo />
                    </span>
                </a>
            }
            {meaningsData.meanings && meaningsData.meanings.map((meaning,idx)=>{
                return <MeaningItem key={idx} data={meaning}/>
            }) }
        </section>}
    </div>
  )
}

export default DictionaryMeanings