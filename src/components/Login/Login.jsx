import React from 'react';

import {connect} from 'react-redux';
import {
  googleSignInStart,
  credentialSignInStart,
} from '../../actions/userActions';

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

  handleSubmit = async (event) => {
    const {credentialSignInStart} = this.props;
    const {email, password} = this.state;

    event.preventDefault();

    credentialSignInStart(email, password);
  };

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {googleSignInStart} = this.props;

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
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              Login with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  credentialSignInStart: (email, password) =>
    dispatch(credentialSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(Login);
