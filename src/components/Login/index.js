import './index.css'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {useNavigate, Link} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const submitSuccess = jwt_token => {
    Cookies.set('jwt_token', jwt_token)
    navigate('/home')
  }

  const submitFailure = msg => {
    setErrorMsg(msg)
  }

  const submiForm = async event => {
    event.preventDefault()

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)
    if (response.ok == true) {
      submitSuccess(data.jwt_token)
    } else {
      submitFailure(data.error_msg)
    }
  }

  const onChangeShow = event => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <>
      <div className="login-page">
        <div className="login-card">
          <img
            className="login-card-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <form className="form-container">
            <label htmlFor="Username" className="text">
              USERNAME
            </label>
            <input
              onChange={onChangeUsername}
              className="username-in"
              type="text"
              placeholder="Username"
              name="Username"
            />
            <label htmlFor="Password" className="text">
              PASSWORD
            </label>
            <input
              onChange={onChangePassword}
              className="password-in"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="Password"
            />
            <label className="password-check" onChange={onChangeShow}>
              <input type="checkbox" className="check-box" />
              Show Password
            </label>

            <button className="login-btn" onClick={submiForm}>
              <b>Login</b>
            </button>
            {errorMsg}
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
