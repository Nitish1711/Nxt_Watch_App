import './index.css'
import Header from '../Header'
import LeftSection from '../LeftSection'
import RightSection from '../RightSection'
import {useState} from 'react'

const Home = () => {
  const [searchHome, setSearchHome] = useState('all?search')

  return (
    <>
      <Header />
      <div className="home-container">
        <LeftSection setSearchHome={setSearchHome} />
        <RightSection searchHome={searchHome} />
      </div>
    </>
  )
}

export default Home
