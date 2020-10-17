import React from 'react';
import {render} from "@testing-library/react";
import Button from './Button';

it('renders Button component', () => {
  expect(
    render(
      <Button onClick={() => {
      }} inverted isGoogleSignIn>
        Test
      </Button>
    )
  ).toMatchSnapshot();
});
