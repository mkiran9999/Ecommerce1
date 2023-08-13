import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard'
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Color from '../components/Color';
import {TbGitCompare} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import Container from '../components/Container';

const SingleProduct = () => {
  return (
    <> 
      <Meta title={"Product Name"}/>
      <Breadcrumb title="Product Name"/>
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-6">
                <div className="main-product-image">
                    <div>
                    <img src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" alt='watch'/>
                    </div>
                </div>
                <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div><img className='img-fluid' src='https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg' alt='watch'/></div>
                    <div><img className='img-fluid' src='https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg' alt='watch'/></div>
                    <div><img className='img-fluid' src='https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg' alt='watch'/></div>
                    <div><img className='img-fluid' src='https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg' alt='watch'/></div>
                </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    qwertyuio sdfghj sdfghjk sdfghnm iuhgv uygfdfg bgfrtyh
                  </h3>
                  <div className="border-bottom py-3">
                    <p className="price">$ 100</p>
                    <div className="d-flex align-items-center gap-10">
                    <ReactStars
                        count={5}
                        value ={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 reviews)</p>
                    </div>
                    {/* <a href=''>write a review</a> */}
                  </div>
                  <div className="border-bottom py-3">
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Type :</h3><p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Brand :</h3><p className='product-data'>Fossil</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Category :</h3><p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Tags :</h3><p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Availability :</h3><p className='product-data'>In Stock</p>
                    </div>
                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                      <h3 className='product-heading'>Size :</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className='badge border-1 bg-white text-dark border-secondary border'>S</span>
                        <span className='badge border-1 bg-white text-dark border-secondary border'>M</span>
                        <span className='badge border-1 bg-white text-dark border-secondary border'>L</span>
                      </div>
                    </div>
                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                      <h3 className='product-heading'>Color :</h3>
                      <Color/>
                    </div>
                    <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>s
                      <h3 className='product-heading'>Quantity :</h3>
                      <div className="">
                        <input defaultValue={1} type='number' name='' min={1} max={10} className='form-control' style={{width:"70px"}} id=''>
                        </input>
                      </div>
                      <div className='d-flex align-items-center gap-30 ms-5'>
                        <button className='button border-0' type='submit'>Add to Cart</button>
                        <button className='button signup'>Buy Now</button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                      <div>
                        <a href=''><TbGitCompare className='fs-5 ma-2'/> Add to Compare</a>
                      </div>
                      <div>
                        <a href=''><AiOutlineHeart className='fs-5 ma-2'/> Add to Wishlist</a>
                      </div>
                    </div>
                    <div className="d-flex gap-10 flex-column my-3">
                      <h3 className="product-heading">Shipping & Returns :</h3>
                      <p className="product-data">
                        Free shipping and returns available on all orders <br />{' '}We ship all US domestic orders with in <b>5-10 business days!</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <h4>Description</h4>
                <div className='bg-white p-3'>
                    <p>
                    6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase
                    </p>
                </div>
            </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12"> 
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div> 
        <div className="row">
          <ProductCard/>
        </div>
      </Container>
    </>
  )
}

export default SingleProduct