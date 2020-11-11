import React, {lazy, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Redirect, Route, Switch} from 'react-router-dom';
import {checkUserSession, selectCurrentUser} from './redux/modules/user';
import Spinner from './components/UI/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

const App = ({currentUser, checkUserSession}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInPage />
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
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
