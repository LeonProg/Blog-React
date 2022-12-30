import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AuthService from '../services/AuthService';
import FormInput from '../components/Input'
import { toFormData } from '../utils/toFormData';

const RegistrationPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    re_password: '',
  });

  const onChangeHandle = (e) => setForm({...form, [e.target.name]: [e.target.value]})

  const registration = async(e) => {
    e.preventDefault()
    try {
      const response = await AuthService.registration(toFormData(form))
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
            {
              Object.keys(form).map((key, index) => 
                <FormInput
                  key={key}
                  value={form.key}
                  name={key}
                  inputId={`${key}_${index}`}
                  placeholder={key} 
                  onChange={(e) => onChangeHandle(e)}
                />
              )
            }          
            <button onClick={registration}>Регистрация</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default RegistrationPage;
