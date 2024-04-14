import './index.css'
import Cookies from 'js-cookie'
import {useState, useEffect} from 'react'
import LeftSection from '../LeftSection'
import Header from '../Header'

const Gaming = () => {
  const accessToken = Cookies.get('jwt_token')
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const autoData = async () => {
      const url = `https://apis.ccbp.in/videos/gaming`
      const options = {
        method: 'GET',
        headers: {Authorization: `Bearer ${accessToken}`},
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data.videos)
      setProductData(data.videos)
      console.log(productData.length)
    }
    autoData()
  }, [])

  return (
    <>
      <Header />
      <div className="home-container1">
        <LeftSection />

        <ul className="product-float1">
          {productData.length > 0 &&
            productData.map(product => (
              <li key={product.id} className="product-card1">
                <img className="product-image1" src={product.thumbnail_url} />
                <div>{product.title}</div>
                <div>{product.view_count}</div>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Gaming
