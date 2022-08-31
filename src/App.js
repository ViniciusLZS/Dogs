import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import { UserStorage } from './UserContext';
import User from './components/user/User';
import ProtectedRouter from './components/Helper/ProtectedRouter';
import Photo from './components/Photo/Photo';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
