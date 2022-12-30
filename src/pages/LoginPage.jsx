import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import index from '../components/Input';
import TokenContext from '../context/TokenContext';
import AuthService from '../services/AuthService';
import FormInput from '../components/Input'
import { toFormData } from '../utils/toFormData';

const LoginPage = () => {
  const nagivate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const {setToken, setIsAuth} = React.useContext(TokenContext)

  const onChangeHandle = (e) => setForm({...form, [e.target.name] : [e.target.value]}) 

  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await AuthService.login(toFormData(form))
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
            {Object.keys(form).map((key, index) => <FormInput
              key={key}
              value={form.key}
              name={key}
              inputId={`${key}_${index}`}
              onChange={e => onChangeHandle(e)}
              placeholder={key}
            />)}
            <button onClick={login}>Вход</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default LoginPage;
