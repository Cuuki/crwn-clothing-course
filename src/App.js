import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './selectors/userSelectors';
import {checkUserSession} from './actions/userActions';

import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import CheckoutPage from './pages/CheckoutPage';

import 'normalize.css';
import './App.scss';

const App = ({currentUser, checkUserSession}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/sign-in"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
