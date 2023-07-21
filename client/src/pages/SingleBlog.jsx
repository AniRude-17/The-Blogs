// Single.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const SingleBlog = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1234/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:1234/api/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post.img}`} alt="post cover" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="user" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src='https://cdn-icons-png.flaticon.com/512/84/84380.png' alt="edit" />
              </Link>
              <img onClick={handleDelete} src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt="delete" />
            </div>
          )}
        </div>
        <h1 className="blog-title">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.desc }} className="blog-content"></div>
        
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default SingleBlog;