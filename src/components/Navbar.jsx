// hooks
import { useLogout } from '../hooks/useLogout'

// router
import { useNavigate } from 'react-router-dom'

// import styles
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const {logout} = useLogout()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()

    navigate('/')
  }

  return (
    <nav className='navigation'>
      <Link to={'/home'} className='nav-link-title'><h1>Moje gry</h1></Link>
      <div>
        <Link to={'/add_game'}><button className='nav-link-btn'>Dodaj grę</button></Link>
        <button className='btn-logout' onClick={handleLogout}>Wyloguj</button>
      </div>
    </nav>
  )
}
