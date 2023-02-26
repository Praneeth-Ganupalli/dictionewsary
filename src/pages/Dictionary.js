import React from 'react'
import DictionaryContent from '../components/Dictionary/DictionaryContent'
import { useLayoutEffect } from 'react'
function Dictionary() {
    useLayoutEffect(()=>{
        document.body.classList.add("body-dictionary");
        const removeCustomClass=()=> document.body.classList.remove("body-dictionary");
        return removeCustomClass;
    },[])
  return (
    <DictionaryContent />
  )
}

export default Dictionary