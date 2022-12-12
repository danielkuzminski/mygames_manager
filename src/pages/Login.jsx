import { useState } from 'react'

// routing
import { Link,useNavigate } from 'react-router-dom'

//hooks
import { useLogin } from '../hooks/useLogin'

// styles
import './Login.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {error, login} = useLogin()

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    
    login(email, password)

    console.log('zalogowano');

    navigate('/home')
  }

  return (
    <div>
    <h1 className='main-title'>Moje gry</h1>
    <form className='login-form' onSubmit={handleLogin}>
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
      <Link className='login-button signup' to={'/signup'}>Zarejestruj się</Link>
    </form>
    </div>
  )
}
