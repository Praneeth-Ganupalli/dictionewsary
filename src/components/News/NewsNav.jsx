import React from 'react'

function NewsNav({curPage,onIncr,onDcr}) {
  return (
    <section className="news-change-page d-flex mt-5 align-items-center justify-content-center">
        <button className="btn btn-info text-white" onClick={onDcr}>
            Prev
        </button>
        <div className='fs-5 text-white'>{curPage} of 50</div>
        <button className="btn btn-info text-white " onClick={onIncr}>
           Next
        </button>
    </section>
  )
}

export default React.memo(NewsNav);