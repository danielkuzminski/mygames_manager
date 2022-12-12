import { useState } from 'react'

// router
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// hooks
import { useSignup } from '../hooks/useSignup'

// styles
import './Login.css'

export default function Singnup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const {error, signup} = useSignup()



  const handleSignup = (e) => {
    e.preventDefault();
    
    signup(email, password, displayName)

    console.log(email, password, displayName);

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
      <Link className='login-button signup' to={'/'}>do logowania</Link>
    </form>
    </div>
  )
}
