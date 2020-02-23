import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase'

import './SignUp.scss'

const SignUp = () => {
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
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    } catch (error) {
      console.error(error)
    }
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

export default SignUp
