import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/Header'
import ShopPage from './pages/shoppage/ShopPage'
import CheckoutPage from './pages/checkoutpage/CheckoutPage'
import HomePage from './pages/homepage/HomePage'

import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage'
import { checkUserSession } from './actions/userActions'
import { selectCurrentUser } from './selectors/userSelector'

import './App.css'
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)} />
        <Route exact path="/checkout" component={CheckoutPage} />
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
