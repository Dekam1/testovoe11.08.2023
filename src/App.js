import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import AuthorizationPopap from './components/authorizationPopap/AuthorizationPopap';
import Context from './context';
import RequireAuth from './hoc/RequireAuth';
import Account from './pages/Account';
import AuthProvider from './hoc/AuthProvider';
import Contacts from './pages/Contacts';

function App() {
  const [popapShow, setPopapShow] = React.useState(false);
  const userDate = localStorage.getItem('userDate') || null;
  const [user, setUser] = React.useState(JSON.parse(userDate));
  const [authorizationError, setAuthorizationError] = React.useState(false);

  return (
    <Context.Provider value={
      { setPopapShow, user, authorizationError, setAuthorizationError }
    }>
      <AuthProvider
        user={user}
        setUser={setUser}
      >
        <Routes>
          <Route path='/' element={
            <Main />
          } />
          <Route path='/account' element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          } />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>

        {popapShow && <AuthorizationPopap />}
      </AuthProvider >
    </Context.Provider>
  );
}

export default App;
