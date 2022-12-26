import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({id,title, description, name}) => {
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
            November 1, 2015
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
            <a href="post.html" className="button large">
              Continue Reading
            </a>
          </li>
        </ul>
        <ul className="stats">
          <li>
            <button style={{ color: '#a00' }}>Remove</button>
          </li>
        </ul>
      </footer>
    </article>
  );
};

export default Post;
