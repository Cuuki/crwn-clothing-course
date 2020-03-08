import styled, {css} from 'styled-components';

const defaultButtonStyles = css`
  border: none;
  background-color: black;
  color: white;

  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyles = css`
  border: 1px solid black;
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleButtonStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : defaultButtonStyles;
};

export const ButtonStyled = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  text-align: center;

  ${getButtonStyles}
`;
