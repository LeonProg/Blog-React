import React from 'react';
import { Link } from 'react-router-dom';
import { toDate } from '../utils/toDate';

const Post = ({id,title, description, name, created_at}) => {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <Link to={`posts/${id}`}>{title}</Link>
          </h2>
        </div>
        <div className="meta">
          <time className="published" dateTime="2015-11-01">
            {toDate(created_at)}
          </time>
          <span className="name">{name}</span>
        </div>
      </header>
      <a href="post.html" className="image featured">
        <img src="images/pic01.jpg" alt="" />
      </a>
      <p>
        {description}
      </p>
      <footer>
        <ul className="actions">
          <li>
            <Link className="button large" to={`posts/${id}`}>Continue Reading</Link>
          </li>
        </ul>
      </footer>
    </article>
  );
};

export default Post;
