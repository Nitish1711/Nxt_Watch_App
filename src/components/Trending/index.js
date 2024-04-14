import './index.css'
import Header from '../Header'
import LeftSection from '../LeftSection'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {useEffect, useState} from 'react'

const Trending = () => {
  const accessToken = Cookies.get('jwt_token')
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const autoData = async () => {
      const url = `https://apis.ccbp.in/videos/trending`
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
      <div className="home-container">
        <LeftSection />
        <ul className="product-float">
          <div className="trending-logo">
            <h1>
              <b>Trending</b>
            </h1>
          </div>
          <div className="renderProduct">
            {productData.length > 0 &&
              productData.map(product => (
                <li key={product.id} className="product-card">
                  <div className="product-card">
                    <img
                      className="product-image-game"
                      src={product.thumbnail_url}
                    />
                    <div className="details-column">
                      <div className="text-font">{product.title}</div>

                      <div className="text-font faint">
                        {product.view_count} views
                      </div>
                      <div className="text-font faint">
                        {product.published_at != undefined
                          ? formatDistanceToNow(
                              new Date(product.published_at),
                            ) + ' ago'
                          : null}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </div>
        </ul>
      </div>
    </>
  )
}

export default Trending
