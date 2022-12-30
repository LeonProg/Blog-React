import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PostService from '../services/PostService';
import { toFormData } from '../utils/toFormData';

const CreatePostPage = () => {
  const navigator = useNavigate()
  const [showImg, setShowImg] = React.useState();
  const [form, setForm] = React.useState({
    title: '',
    description: '',
    content: '',
    cover_file: '',
  });

  const changeFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setForm({...form, cover_file: e.target.files[0]});
    const reader = new FileReader();
    reader.onloadend = () => {
      setShowImg(reader.result);
    }
    reader.readAsDataURL(file);
  }

  const create = async (e) => {
    e.preventDefault();
    try {
      const response = await PostService.createPost(toFormData(form));
      console.log(response.data.data);
      navigator('/')
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <article className="post">
          <h1>Create post</h1>
          <form action="#">
            <label htmlFor="form-title">Post title</label>
            <input
              id="form-title"
              type="text"
              placeholder="Post title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <br />
            <label htmlFor="form-description">Post description</label>
            <textarea
              id="form-description"
              placeholder="Post description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
            <br />
            <label htmlFor="form-content">Post content</label>
            <textarea
              id="form-content"
              placeholder="Post content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
            <br />
            <label htmlFor="form-image">Post image</label>
            <input onChange={changeFile} id="form-image" type="file" accept="image/*, .png, .jpg" />
            <br />
            {showImg && <img width={150} height={150} src={showImg} alt="Фото"/>}
            <br />
            <button onClick={create}>Отправить</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default CreatePostPage;
