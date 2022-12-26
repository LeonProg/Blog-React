import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PostService from '../services/PostService';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState({})
  const fetchPost = async () => {
    const response = await PostService.getPost(id);
    setPost(response.data.data);
  };

  React.useEffect(() => {
    try {
      fetchPost();
      console.log(post)
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <article className="post">
          <header>
            <div className="title">
              <h2>
                <b>{post.title}</b>
              </h2>
            </div>
            <div className="meta">
              <time className="published" dateTime="2015-11-01">
                November 1, 2015
              </time>
              <span className="name">{post.name}</span>
            </div>
          </header>
          <span className="image featured">
            <img src="images/pic10.jpg" alt="Фото" />
          </span>
          <p>
            {post.description}
          </p>
          <p>
            {post.content}
          </p>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
