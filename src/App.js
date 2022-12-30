import React, { useState } from 'react';
import TokenContext from './context/TokenContext';
import { PublicRoutes, PrivateRoutes } from './routes';


function App() {
  const [token, setToken] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  // Переделать
  function saveLocal() {
    setToken(localStorage.getItem('token'))
    setIsAuth(true)
  }

  function removeLocal() {
    setIsAuth(false)
    setToken('')
    localStorage.removeItem('token')
  }

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      saveLocal()
    }
  })

  return (
    <TokenContext.Provider value={{token, setToken, isAuth, setIsAuth, removeLocal}}>
      <div className="App">
        {isAuth && <PrivateRoutes />}
        <PublicRoutes />
      </div>
    </TokenContext.Provider>
  );
}

export default App;
