import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const posts = [
        {
         id:1,
         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque perferendis ",
         desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae minima nihil dolor debitis, natus officia sed dolorem ipsam distinctio culpa odit sit.",
         img:"https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
         id:2,
         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque perferendis ",
         desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae minima nihil dolor debitis, natus officia sed dolorem ipsam distinctio culpa odit sit.",
         img:"https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
         id:3,
         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque perferendis ",
         desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae minima nihil dolor debitis, natus officia sed dolorem ipsam distinctio culpa odit sit.",
         img:"https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
     ];
  return (
    <div className="col-md-4">
    <h2 className='sub_title'>Other Post you may like</h2>
    {posts.map(post=>(
    <div className='other_card' key={post.id}>
    <div className="post_card">
       <img src={post.img} className='w-100'/>
       <Link to={'/post/${post.id}'}>
           <h3>{post.title}</h3>
          <button className='btn btn-primary w-100'>
             Read More
          </button>
       </Link>
    </div>
    </div>
    ))}
 </div>
  )
}

export default Menu
