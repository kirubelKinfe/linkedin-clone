import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../utils/firebaseDb'
import linkedinLogo from '../../assets/Logo.png'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

const Login = () => {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')

  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        })
      )
    }).catch(error => console.log(error))
  }

  const register = () => {
    if(!name) {
      return setError("No Name Entered")
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        }))
      })
    }).catch(error => console.log(error))
  }

  return (
    <div className='login'>
        <img src={linkedinLogo} alt="logo"/>

        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name(required if registering)' type='text' />
            <p className='error'>{error}</p>
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type='text' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?
            <span className='login__register' onClick={register}> Register Now</span>
        </p>
    </div>
  )
}

export default Login