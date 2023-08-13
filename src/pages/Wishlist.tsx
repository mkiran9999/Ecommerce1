import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'

function Wishlist() {
  return ( 
    <>
      <Meta title={"Wishlist"}/>
      <Breadcrumb title="Wishlist"/>
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                </div>
                <div className='py-3'>
                  <h5 className="title">Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                </div>
                <div className='py-3'>
                  <h5 className="title">Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                </div>
                <div className='py-3'>
                  <h5 className="title">Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist