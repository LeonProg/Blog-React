import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import TokenContext from '../context/TokenContext';
import AuthService from '../services/AuthService';

const LoginPage = () => {
  const nagivate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const {setToken, setIsAuth} = React.useContext(TokenContext)

  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await AuthService.login(form.email, form.password)
      localStorage.setItem('token', response.data.token)
      setToken(response.data.token)
      setIsAuth(true)
      nagivate('/')
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <article className="post">
          <h1>Login</h1>
          <form>
            <label htmlFor="formEmail">Your email</label>
            <input
              id="formEmail"
              type="text"
              placeholder="Your email"
              onChange={(e) => setForm({...form, email: e.target.value})}
              value={form.email}
            />
            <span>Error message</span>
            <br />
            <label htmlFor="formPassword">Your password</label>
            <input id="formPassword" type="text" placeholder="Your password" onChange={(e) => setForm({...form, password: e.target.value})} value={form.password}/>
            <br />
            <button onClick={login}>Вход</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default LoginPage;
