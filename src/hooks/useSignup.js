// react
import {useState} from 'react'

// firebase
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

// hooks
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const {dispatch} = useAuthContext()

  const signup = (email, password, displayName) => {
    setError(null)

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        res.user.updateProfile({ displayName })})
      .then((res) => {
        dispatch({type: 'SIGNUP', payload: res.user})
      })
      .catch((err) => {
        setError(err.message)
      })
  }
  return {error, signup}
}