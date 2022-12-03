// import styles
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navigation'>
      <Link to={'/'} className='nav-link-title'><h1>Moje gry</h1></Link>
      <Link to={'/add_game'}><button className='nav-link-btn'>Dodaj grę</button></Link>
    </nav>
  )
}
