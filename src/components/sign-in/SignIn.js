import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { requestGoogleSignIn, requestEmailSignIn } from '../../actions/userActions'

import './SignIn.scss'

const SignIn = ({ requestGoogleSignIn, requestEmailSignIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    requestEmailSignIn(email, password)
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          required
          handleChange={e => setEmail(e.target.value)}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          required
          handleChange={e => setPassword(e.target.value)}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" isgooglesignin onClick={requestGoogleSignIn}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  requestGoogleSignIn: () => dispatch(requestGoogleSignIn()),
  requestEmailSignIn: (email, password) => dispatch(requestEmailSignIn({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
