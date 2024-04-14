import './index.css'
import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import ProductCard from '../../components/ProductCard'

const AllProductSection = props => {
  const {searchHome} = props
  const accessToken = Cookies.get('jwt_token')
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const autoData = async () => {
      const url = `https://apis.ccbp.in/videos/${searchHome}`
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
  }, [searchHome])

  return (
    <>
      <div className="product-container">
        <ul className="product-float">
          {productData.length > 0 &&
            productData.map(product => (
              <li key={product.id} className="product-card">
                <ProductCard product={product} />
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default AllProductSection
