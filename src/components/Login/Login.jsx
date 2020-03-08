import React from 'react';

import {auth, signInWithGoogle} from '../../utils/firebase';

import Button from '../UI/Button';
import FormInput from '../UI/FormInput';

import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;
    //TODO: login works even if user doesn't exist
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="login">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            id="loginEmail"
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            required="required"
            onChange={this.handleChange}
          />
          <FormInput
            id="loginPassword"
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            required="required"
            onChange={this.handleChange}
          />
          <div className="buttons">
            <Button type="submit">Login</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Login with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
