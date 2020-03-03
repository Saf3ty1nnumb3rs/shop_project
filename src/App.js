import React, { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import Spinner from './components/spinner/Spinner'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

import { checkUserSession } from './actions/userActions'
import { selectCurrentUser } from './selectors/userSelector'

import './App.css'

const ShopPage = lazy(() => import('./pages/shoppage/ShopPage'))
const CheckoutPage = lazy(() => import('./pages/checkoutpage/CheckoutPage'))
const SignInSignUpPage = lazy(() => import('./pages/sign-in-sign-up/SignInSignUpPage'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Router>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Router>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
