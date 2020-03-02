import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { requestSignUp } from '../../actions/userActions'

import './SignUp.scss'

const SignUp = ({ requestSignUp }) => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    requestSignUp({ displayName, email, password })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="display name"
          value={displayName}
          required
          handleChange={e => setDisplayName(e.target.value)}
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          label="confirm password"
          value={confirmPassword}
          required
          handleChange={e => setConfirmPassword(e.target.value)}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  requestSignUp: userCredentials => dispatch(requestSignUp(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp)
