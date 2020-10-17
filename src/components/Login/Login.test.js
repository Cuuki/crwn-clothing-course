import React from 'react';
import {render} from "@testing-library/react";
import Login from './Login';

describe('Login', () => {
  it('renders Login component', () => {
    const mockGoogleSignInStart = jest.fn();
    const mockCredentialSignInStart = jest.fn();

    expect(render(
      <Login
        googleSignInStart={mockGoogleSignInStart}
        credentialSignInStart={mockCredentialSignInStart}
      />
    )).toMatchSnapshot();
  });
})
