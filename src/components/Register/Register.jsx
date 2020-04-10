import React from 'react';

import {connect} from 'react-redux';
import {registrationStart} from '../../actions/userActions';

import Button from '../UI/Button';
import FormInput from '../UI/FormInput';

import './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    const {registrationStart} = this.props;
    const {displayName, email, password, confirmPassword} = this.state;

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
  };

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
      <div className="register">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            id="registerDisplayName"
            type="text"
            name="displayName"
            value={displayName}
            label="Display name"
            required="required"
            onChange={this.handleChange}
          />
          <FormInput
            id="registerEmail"
            type="email"
            name="email"
            value={email}
            label="Email"
            required="required"
            onChange={this.handleChange}
          />
          <FormInput
            id="registerPassword"
            type="password"
            name="password"
            value={password}
            label="Password"
            required="required"
            onChange={this.handleChange}
          />
          <FormInput
            id="registerPasswordConfirm"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            required="required"
            onChange={this.handleChange}
          />
          <div className="buttons">
            <Button type="submit">Register</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registrationStart: (email, password, displayName) =>
    dispatch(registrationStart({email, password, displayName})),
});

export default connect(null, mapDispatchToProps)(Register);
