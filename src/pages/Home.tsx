// import React from 'react'
import * as React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img 
                  src='images/main-banner-1.jpg'
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button" to={''}>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center"> 
                <div className="small-banner position-relative">
                  <img 
                    src='images/catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src='images/catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src='images/catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div> 
                <div className="small-banner position-relative">
                  <img 
                    src='images/catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera'/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera'/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera'/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"> 
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"> 
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className="row">
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"> 
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div> 
          <div className="row">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home