// router
import { useNavigate } from 'react-router-dom'

// styles
import './NotFound.css'

export default function NotFound() {

  const navigate = useNavigate()
  
  // redirecting to main page
  setTimeout(() => {
    navigate('/')
  }, 5000)

  return (
    <div className='not-found'>
      <h1>404</h1>
      <h1>(ㆆ_ㆆ)</h1>
      <h3>Podany adres nie istnieje.</h3>
      <h3>Za 5 sekund nastąpi przekierowanie na stronę główną.</h3>
    </div>
  )
}
