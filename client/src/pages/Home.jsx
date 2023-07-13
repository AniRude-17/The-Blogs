import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  
  const posts=[
    {
      id:1,
      title:"lONE BLOG A DAY ABCD EFGHIJK LMN OP QRSTUVWXY XZAB",
      desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      img:"https://picsum.photos/900/900",
    },
    {
      id:2,
      title:"RFTVGBHNJMK",
      desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      img:"https://picsum.photos/900/900",
    },
    {
      id:3,
      title:"RANDOM TITLE 222",
      desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      img:"https://picsum.photos/900/900",
    },
    {
      id:4,
      title:"tITLE RANDOME",
      desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      img:"https://picsum.photos/900/900",
    },
  ];


  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="haha"/>
            </div>
            <div className='content'>
              <Link to="/post/${post.id}" className="title">{post.title}</Link>
              <p>{post.desc}</p>
              <button>Read More</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home