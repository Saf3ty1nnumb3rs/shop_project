import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { signInWithGoogle } from '../../firebase/firebase'

import './SignIn.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setEmail('')
    setPassword('')
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
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
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
