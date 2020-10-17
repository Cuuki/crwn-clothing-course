import React, {useState, useCallback} from 'react';

import Button from '../UI/Button';
import FormInput from '../UI/FormInput';

import './Login.scss';

const Login = ({googleSignInStart, credentialSignInStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const {email, password} = userCredentials;

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      credentialSignInStart(email, password);
    },
    [credentialSignInStart, email, password]
  );

  const handleChange = useCallback(
    (event) => {
      const {value, name} = event.target;

      setUserCredentials({
        ...userCredentials,
        [name]: value,
      });
    },
    [userCredentials]
  );

  return (
    <div className="login">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          id="loginEmail"
          type="email"
          name="email"
          value={email}
          label="Email"
          required="required"
          onChange={handleChange}
        />
        <FormInput
          id="loginPassword"
          type="password"
          name="password"
          value={password}
          label="Password"
          required="required"
          onChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Login</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Login with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
