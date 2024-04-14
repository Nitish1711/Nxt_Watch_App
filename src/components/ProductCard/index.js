import './index.css'
import {formatDistanceToNow} from 'date-fns'

const ProductCard = props => {
  const {product, inSearch} = props

  const renderHtml = (
    <>
      <div className="product-card">
        <img
          className={
            inSearch == 'gaming' ? 'product-image-game' : 'product-image-home'
          }
          src={product.thumbnail_url}
        />

        <div className="channel-float">
          {product.channel != undefined ? (
            <img
              className="product-logo"
              src={product.channel.profile_image_url}
            />
          ) : null}
          <div className="details-column">
            <div className="text-font">{product.title}</div>
            {product.channel != undefined ? (
              <div className="text-font faint">{product.channel.name}</div>
            ) : null}
            <div className="default-row">
              <div className="text-font faint">{product.view_count} views </div>
              <div className="text-font faint">
                {product.published_at != undefined
                  ? formatDistanceToNow(new Date(product.published_at)) + ' ago'
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return renderHtml
}

export default ProductCard
