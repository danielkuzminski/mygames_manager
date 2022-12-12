import {useState} from 'react'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'


export const useSignup = () => {
  const [error, setError] = useState(null)

  const signup = (email, password, displayName) => {
    setError(null)

    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log('user signed in', res.user);
    })
    .then((res) => {
      res.user.updateProfile({ displayName })})
    .catch((err) => {
      setError(err.message)
    })
  }
  return {error, signup}
}