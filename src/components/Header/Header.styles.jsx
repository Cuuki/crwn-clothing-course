import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderStyled = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoLinkStyled = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLinkStyled = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
