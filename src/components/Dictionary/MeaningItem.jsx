import React from 'react'

function MeaningItem({data}) {
 const {partOfSpeech,definitions}=data;
  return (
    <div className="meaning-item mb-1 mt-3 ms-0">
      <h5 >Part of speech : <span className="text-capitalize"> {partOfSpeech} </span></h5>
      <ul className='list-group'>{definitions.slice(0,3).map((def) => {
        return <li className='mb-2 list-group-item'  key={def.definition}>
            <div><strong className='me-3'>Context:</strong>{def.definition}</div>
            {def.example && <div className='mt-2'><strong className='me-3'>Example: </strong>{def.example}</div>}
        </li>
      })}</ul>
    </div>
  );
}

export default MeaningItem