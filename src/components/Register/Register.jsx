import React, {useState, useCallback} from 'react';

import {connect} from 'react-redux';
import {registrationStart} from '../../actions/userActions';

import Button from '../UI/Button';
import FormInput from '../UI/FormInput';

import './Register.scss';

const Register = ({registrationStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return;
      }

      if (password.length < 6) {
        alert('Password length should be at least 6 characters.');
        return;
      }

      registrationStart(email, password, displayName);
    },
    [registrationStart, confirmPassword, displayName, email, password]
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
    <div className="register">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          id="registerDisplayName"
          type="text"
          name="displayName"
          value={displayName}
          label="Display name"
          required="required"
          onChange={handleChange}
        />
        <FormInput
          id="registerEmail"
          type="email"
          name="email"
          value={email}
          label="Email"
          required="required"
          onChange={handleChange}
        />
        <FormInput
          id="registerPassword"
          type="password"
          name="password"
          value={password}
          label="Password"
          required="required"
          onChange={handleChange}
        />
        <FormInput
          id="registerPasswordConfirm"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required="required"
          onChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registrationStart: (email, password, displayName) =>
    dispatch(registrationStart({email, password, displayName})),
});

export default connect(null, mapDispatchToProps)(Register);
