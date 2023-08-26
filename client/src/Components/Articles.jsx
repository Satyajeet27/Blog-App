import React from 'react'
import { NavLink } from 'react-router-dom'

const Articles = ({title, description, image, author}) => {
  return (
    <div className='card p-3 m-2 shadow' style={{width:"40%", minWidth:"200px"}}>
        
        <div className="row">
        <div className='col-md-5'>
        <img src={image} className="image-fluid " alt="..." style={{width:"100%"}} />
        </div>
        <div className="card-body col-md-7">
        <div className="card-title">{title}</div>
        <p>Author: {author}</p>
            <div className="card-text">
                {description}
                <NavLink className="text-decoration-none px-2" to="#">...Read more</NavLink>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Articles