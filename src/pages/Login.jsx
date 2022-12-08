import { useState } from 'react'

// styles
import './Login.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (email, password) => {}

  return (
    <div>
    <h1 className='main-title'>Moje gry</h1>
    <form className='login-form' onSubmit={login}>
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
      <button className='login-button' type='submit'>zaloguj</button>
    </form>
    </div>
  )
}
