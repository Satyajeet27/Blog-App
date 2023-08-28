import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Articles = ({_id,title, description, image, author}) => {
  return (
    <div className='card p-3 m-2 shadow w-100' style={{minHeight:"18rem"}}>
        
        <div className="row">
        <div className='col-md-4'>
       <div className="w-100" style={{height:"16rem"}}>
        <img src={image} className="w-100" alt="..." style={{height:"100%"}}/>
       </div>
        </div>
        <div className="card-body col-md-8">
        <div className="card-title">Title: {title}</div>
        <p>Author: {author}</p>
            <p className="card-text overflow-hidden">
                {description.substring(0,400)}
                <NavLink className="text-decoration-none px-2" to={`article/${_id}`}>...Read more</NavLink>
            </p>
            
        </div>
        </div>
    </div>
  )
}

export default Articles