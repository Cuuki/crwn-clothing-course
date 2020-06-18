import {shallow} from 'enzyme';
import React from 'react';
import Button from './Button';

it('renders Button component', () => {
  expect(
    shallow(
      <Button onClick={() => {}} inverted isGoogleSignIn>
        Test
      </Button>
    )
  ).toMatchSnapshot();
});
