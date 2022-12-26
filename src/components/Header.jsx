import React from 'react';
import { Link } from 'react-router-dom';
import TokenContext from '../context/TokenContext';
import AuthService from '../services/AuthService';
import { CREATE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/Route';

const Header = () => {
  const { isAuth, setIsAuth, setToken } = React.useContext(TokenContext);

  const logout = () => {
    AuthService.logout()
    setIsAuth(false)
    setToken('')
    localStorage.removeItem('token')
  } 

  return (
    <header id="header">
      <h1>
        <Link to={HOME_ROUTE}>Blog</Link>
      </h1>
      <nav className="links">
        {isAuth ? (
          <ul>
            <li>
              <a href={CREATE_ROUTE}>Create post</a>
            </li>
            <li style={{cursor: 'pointer'}}>
              <div onClick={logout}>Logout</div>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to={LOGIN_ROUTE}>Login</Link>
            </li>
            <li>
              <Link to={REGISTRATION_ROUTE}>Registration</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
