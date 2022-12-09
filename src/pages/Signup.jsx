import { useState } from 'react'

// router
import { useNavigate } from 'react-router-dom'

// database and authentication
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

// styles
import './Login.css'
import { async } from '@firebase/util'

export default function Singnup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState(null)

  const signup = async(email, password, displayName) => {
    
  }

  const handleSignup = (e) => {
    e.preventDefault();
    
    signup()

    console.log(email, password);

    navigate('/home')
  }


  return (
    <div>
    <h1 className='main-title'>Moje gry</h1>
    <form className='login-form' onSubmit={handleSignup}>
      <label>
        <span className='login-title'>email: </span>
        <input 
          className='login-input'
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value)
          }} 
          value={email}
          />
      </label>
      <label>
        <span className='login-title'>password: </span>
        <input 
          className='login-input'
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          value={password}
           />
      </label>
      <label>
        <span className='login-title'>user name: </span>
        <input 
          className='login-input'
          type="text"
          required
          onChange={(e) => {
            setDisplayName(e.target.value)
          }} 
          value={displayName}
          />
      </label>
      <button className='login-button' type='submit'>Stwórz</button>
    </form>
    </div>
  )
}
