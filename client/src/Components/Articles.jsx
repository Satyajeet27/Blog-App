import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Articles = ({_id,title, description, image, author}) => {
  console.log(_id)
  return (
    <div className='card p-2 my-2 shadow w-100' style={{minHeight:"14rem"}}>
        
        <div className="row">
        <div className='col-md-4 ' style={{alignSelf:" center"}}>
       <div className="w-100 my-auto" style={{height:"14rem"}}>
        <img src={image} className="w-100 rounded shadow" alt="..." style={{height:"100%",objectFit:"cover"}}/>
       </div>
        </div>
        <div className="card-body col-md-8">
        <div className="card-title fw-bold fs-5"> {title}</div>
        <p className='text-secondary'>~{author}</p>
            <p className="card-text overflow-hidden">
                {description.substring(0,400)}
                {/* in below code we used /article/ instead of article/ because /article will refer the homepage while article/ will refer the currentpage/article */}
                <NavLink className="text-decoration-none px-2" to={`/article/${_id}`}>...Read more</NavLink>
            </p>
            
        </div>
        </div>
    </div>
  )
}

export default Articles