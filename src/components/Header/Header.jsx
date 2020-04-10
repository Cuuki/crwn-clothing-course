import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../selectors/userSelectors';
import {selectCartHidden} from '../../selectors/cartSelectors';
import {signOutStart} from '../../actions/userActions';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {
  HeaderStyled,
  LogoLinkStyled,
  OptionsStyled,
  OptionLinkStyled,
} from './Header.styles';

const Header = ({currentUser, cartHidden, signOutStart}) => (
  <HeaderStyled>
    <LogoLinkStyled to="/">
      <Logo />
    </LogoLinkStyled>
    <OptionsStyled>
      <OptionLinkStyled to="/shop">Shop</OptionLinkStyled>
      <OptionLinkStyled to="/contact">Contact</OptionLinkStyled>
      {currentUser ? (
        <OptionLinkStyled as="div" onClick={signOutStart}>
          Sign Out
        </OptionLinkStyled>
      ) : (
        <OptionLinkStyled to="/sign-in">Sign In</OptionLinkStyled>
      )}
      <CartIcon />
    </OptionsStyled>
    {cartHidden ? null : <CartDropdown />}
  </HeaderStyled>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
