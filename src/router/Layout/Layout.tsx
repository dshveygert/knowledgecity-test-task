import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import logo from '../../assets/logo.svg';
import './layout.css';

export default function Layout() {
  const { user, signOut } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(() => navigate('/'));
  };
  const User = user?.id ? (
    <div className='user'>
      <div className='email'>{user?.email}</div>
      <div className='logout' onClick={logoutHandler}>
        Logout
      </div>
    </div>
  ) : (
    ''
  );
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img src={logo} className='logo' alt='logo' />
        </Link>
        {User}
      </header>
      <div className='layout'>
        <Outlet />
      </div>
    </>
  );
}
