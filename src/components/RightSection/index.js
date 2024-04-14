import './index.css'
import Premium from '../Premium'
import AllProductSection from '../AllProductSection'

const RightSection = props => {
  const {searchHome} = props
  console.log(searchHome, ' = Right')

  return (
    <>
      <div className="right-container">
        <Premium />
        <div className="input-search-container">
          <label htmlFor="search">
            <input
              className="input-search"
              type="text"
              placeholder="Search"
            ></input>
            <button className="input-search-btn">
              <img src="" alt="search" />
            </button>
          </label>
          <AllProductSection searchHome={searchHome} />
        </div>
      </div>
    </>
  )
}

export default RightSection
