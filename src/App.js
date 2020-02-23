import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shoppage/ShopPage'
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage'

import { auth } from './firebase/firebase'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
