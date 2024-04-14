import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import './index.css'

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = Cookies.get('jwt_token')
    if (accessToken === undefined) {
      navigate('/login')
      console.log('accessToken is undefined')
    }
  }, [])

  return children
}

export default ProtectedRoute
