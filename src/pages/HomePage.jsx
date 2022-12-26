import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import PostService from '../services/PostService';

const HomePage = () => {
  const [posts, setPosts] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true)

  const getPosts = async () => {
    const response = await PostService.getPosts();
    setPosts(response.data.data);
    setIsLoading(false)

  };
  // Вынести в отдел логику
  React.useEffect(() => {
    try {
      getPosts();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        {isLoading ? <h1>Загрузка</h1> : posts.map((post) => <Post key={post.id} {...post} />)}
      </div>
    </div>
  );
};

export default HomePage;
