import React from 'react'
import './featured.css'

const Featured = () => {
  return (
  
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt='featured-image'/>
            <div className="featuredTitel">
                <h1>Assam</h1>
                <h2>100 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o=" alt='featured-image'/>
            <div className="featuredTitel">
                <h1>Meghalaya</h1>
                <h2>75 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/690329.webp?k=330403cfa8e49ee98d01a4808f169d520e49f24348154b8cb7f637497015802f&o=" alt='featured-image'/>
            <div className="featuredTitel">
                <h1>Bhutan</h1>
                <h2>50 Properties</h2>
            </div>
        </div>

    </div>
  )
}

export default Featured