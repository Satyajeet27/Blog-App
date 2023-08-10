import React from 'react'
import { NavLink } from 'react-router-dom'

const Articles = () => {
  return (
    <div className='card p-3'>
        <div className="card-title">Title</div>
        <p>Author</p>
        <div className="row">
        <div className='col-md-4'>
        <img src="https://images.pexels.com/photos/17060538/pexels-photo-17060538/free-photo-of-clear-sky-over-waterfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top " alt="..."  style={{maxHeight:"15rem"}}/>
        </div>
        <div className="card-body col-md-8">
            <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti cum totam cupiditate aperiam quaerat omnis. Sunt ipsa maxime, accusamus soluta maiores architecto voluptatum vero quisquam dolorem iste explicabo! Dolorum voluptatem repellendus magnam soluta accusamus. Aliquid ex eum laudantium nesciunt velit asperiores quis qui fugiat, nostrum odio doloremque quaerat, enim quae neque voluptate repudiandae impedit obcaecati! Totam dolorem eius debitis minus, dolore ea delectus reprehenderit voluptatem nisi, explicabo odio amet culpa expedita qui quia error ex rem quo tenetur esse ipsam voluptas quidem vitae. Similique corrupti et nostrum. Soluta voluptatibus reiciendis dolorum similique, iure atque omnis itaque corrupti aliquid ratione!
                <NavLink className="text-decoration-none px-2" to="#">...Read more</NavLink>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Articles