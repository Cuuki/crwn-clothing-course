import React from 'react';

import Login from '../../components/Login';
import Register from '../../components/Register';

import './SignInPage.scss';

const SignInPage = () => (
  <div className="sign-in-page">
    <Login />
    <Register />
  </div>
);

export default SignInPage;
