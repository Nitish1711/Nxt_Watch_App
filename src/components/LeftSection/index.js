import './index.css'
import {Link} from 'react-router-dom'

const LeftSection = props => {
  return (
    <>
      <div className="left-container">
        <Link to="/home">
          <button className="btn">
            <b>Home</b>
          </button>
        </Link>
        <Link to="/trending">
          <button className="btn">
            <b>Trending</b>
          </button>
        </Link>
        <Link to="/gaming">
          <button className="btn">
            <b>Gaming</b>
          </button>
        </Link>
        <Link to="/saved-videos">
          <button className="btn">
            <b>Saved Videos</b>
          </button>
        </Link>
      </div>
    </>
  )
}

export default LeftSection
