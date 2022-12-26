import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AuthService from '../services/AuthService';

const RegistrationPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    re_password: '',
  });

  const registration = async(e) => {
    e.preventDefault()
    try {
      const response = await AuthService.registration(form.name, form.email, form.password, form.re_password)
      console.log(response)
      navigate('/login')
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <article className="post">
          <h1>Registration</h1>
          <form action="#">
            <label htmlFor="formname">Введите логин</label>
            <input
              id="formname"
              type="text"
              placeholder="Имя"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
            />
            <br />
            <label htmlFor="formEmail">Введите почту</label>
            <input
              id="formEmail"
              type="text"
              placeholder="Электронная почта"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
            />{' '}
            <span>Error message</span>
            <br />
            <label htmlFor="formPassword">Введите пароль</label>
            <input
              id="formPassword"
              type="text"
              placeholder="Пароль"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
            />
            <br />
            <label htmlFor="formRePassword">Повторить пароль</label>
            <input
              id="formRePassword"
              type="text"
              placeholder="Повторить пароль"
              onChange={(e) => setForm({ ...form, re_password: e.target.value })}
              value={form.re_password}
            />
            <br />
            <button onClick={registration}>Регистрация</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default RegistrationPage;
