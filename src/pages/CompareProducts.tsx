import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import Color from '../components/Color'
import Container from '../components/Container'

const CompareProducts = () => {
  return (
    <>
      <Meta title={"CompareProducts"}/>
      <Breadcrumb title="CompareProducts"/>
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row"> 
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
              <div className="product-card-image">
                <img src='images/watch.jpg' alt='watch'/>
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage)
                </h5>
                <h6 className="price mb-3">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color/>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
              <div className="product-card-image">
                <img src='images/watch.jpg' alt='watch'/>
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage)
                </h5>
                <h6 className="price mb-3">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color/>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CompareProducts