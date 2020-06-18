import {shallow} from 'enzyme';
import React from 'react';
import Login from './Login';

it('renders Login component', () => {
  const mockGoogleSignInStart = jest.fn();
  const mockCredentialSignInStart = jest.fn();

  const wrapper = shallow(
    <Login
      googleSignInStart={mockGoogleSignInStart}
      credentialSignInStart={mockCredentialSignInStart}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
