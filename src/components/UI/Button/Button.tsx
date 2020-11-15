import React from 'react';

import {ButtonStyled} from './Button.styles';

const Button = ({children, ...props}) => (
  <ButtonStyled className="custom-button" {...props}>
    {children}
  </ButtonStyled>
);

export default Button;
