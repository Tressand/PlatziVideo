import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <Link to='/' rel='canonical'>
      <img className='header__img' src={logo} alt='Platzi Video' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='Perfil' />
        <p>Perfil</p>
      </div>
      <ul>
        <Link className='header__menu--link' to='/account' rel='canonical'>
          <li><p>Cuenta</p></li>
        </Link>
        <Link className='header__menu--link' to='/login' rel='canonical'>
          <li><p>Cerrar Sesión</p></li>
        </Link>
      </ul>
    </div>
  </header>
);

export default Header;
