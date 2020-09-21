/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/containers/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            {' '}
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google Icon' />
          {' '}
          <a href='http://google.com/'>Inicia sesión con Google</a>
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter Icon' />
          {' '}
          <a href='https://twitter.com/'>Inicia sesión con Twitter</a>
        </div>
      </section>
      <p className='login__container--register'>
        ¿No tienes ninguna cuenta?
        <a href='./register'> Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;
