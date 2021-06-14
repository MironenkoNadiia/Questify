import React from 'react';
import s from './Login.module.css';


const Login = ({ name }) => {
   return (
      <div className={s.login}>
         <p className={s.avatar}>{name.charAt(0).toUpperCase()}</p>
         <p className={s.text}>{name} Quest Log</p>
      </div>
   )
}

export default Login