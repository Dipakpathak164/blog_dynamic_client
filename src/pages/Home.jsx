import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
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
    <section>
      <div className="container py-4">
         {posts.map((post)=>(
           <div className="row post" key={post.id}>
              <div className="col-md-6 order-1">
                <div className="img_cont">
                  <img src={post.img} />
                </div>
              </div>
              <div className="col-md-6 order-2 d-flex align-items-center">
                <div className="post_content">
                  <Link to={'/post/${post.id}'}>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <button className='btn btn-primary'>
                    Read More
                  </button>
                  </Link>
                </div>
              </div>
           </div>
         ))}
      </div>
    </section>
  )
}

export default Home
