import React from 'react'
import ExternalLogo from '../ExternalLogo';
function NewsContentItem({newsItem,onRemove}) {
 const {title,points,author,comments,url,id}=newsItem;
 const removeItem=()=>{
    onRemove(id);
 }
  return (
<div className="card mb-2 news-item-wrapper bg-dark">
    <div className="card-body">
        <h5 className='news-title text-white'>{title}</h5>
        <p className="text-muted mb-2">
            {points} points by <span className='text-capitalize'>{author}</span> | {comments} comments
        </p>
        <div className="action-section d-flex">
            <a href={url} rel="noreferrer" target="_blank" className='link-primary text-decoration-none me-3'>Read More
            <span className='ms-1'>
                <ExternalLogo />
            </span>
            </a>
            <span className="text-danger cursor-pointer" onClick={removeItem}>Remove</span>
        </div>
    </div>
</div>
  )
}

export default NewsContentItem