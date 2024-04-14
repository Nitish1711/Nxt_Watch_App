import './index.css'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  const navigate = useNavigate()
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }
  return (
    <div className="header-main">
      <ul className="left-items">
        <li>
          <img
            className="header-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
        </li>
      </ul>

      <ul className="right-items">
        <li>
          <FaMoon className="header-dl" />
        </li>
        <li>
          <img
            className="header-profile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </li>
        <li>
          <button onClick={onClickLogOut} className="logout-btn">
            <b>Logout</b>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Header
