import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import {BiArrowBack} from "react-icons/bi"
import watch from "../images/watch.jpg"
import Container from '../components/Container'

const CheckOut = () => {
  return (
    <>
      <Meta title={"Checkout"}/>
      <Breadcrumb title="Checkout"/>
      <Container class1='checkout-wrapper py-5 home-wrapper-2'>
        <div className="row">
            <div className="col-7">
                <div className="checkout-left-data">
                    <h3 className="website-name">
                        E-commerce
                    </h3>
                    
                    <h4 className='title total'>Contact Information</h4>
                    <p className='user-details total'>Ravikiran (ravikiranmaloth@gmail.com)</p>
                    <h4 className='mb-3'>Shipping Address</h4>
                    <form action='' className='d-flex flex-wrap gap-30 justify-content-between'>
                        <div className='flex-grow-1'>
                            <input type='text' placeholder='First Name' className='form-control'></input>
                        </div>
                        <div className='flex-grow-1'>
                            <input type='text' placeholder='Last Name' className='form-control'></input>
                        </div>
                        <div className='w-100'>
                            <input type='text' placeholder='Adddress' className='form-control'></input>
                        </div>
                        <div className='w-100'>
                            <input type='text' placeholder='Colony, Street, etc ...' className='form-control'></input>
                        </div>
                        <div className='flex-grow-1'>
                            <input type='text' placeholder='City' className='form-control'></input>
                        </div>
                        <div className='flex-grow-1'>
                            <input type='text' placeholder='state' className='form-control'></input>
                        </div>
                        <div className='flex-grow-1'>
                            <input type='text' placeholder = "Zipcode" className='form-control'></input>
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link className= "text-dark" to={"/cart"}><BiArrowBack className='me-2'/>Return to Cart</Link>
                                <Link className='button' to={"/cart"}>Continue to Shopping</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-5">
                <div className='border-bottom py-4'>
                    <div className="d-flex gap-10 mb-2 align-items-center">
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span 
                                style={{top:"-10px",right:"2px"}}
                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                <img className='img-fluid' src={watch} alt="product" />
                            </div>
                            <div>
                                <h5 className='total-price'>hjbjhbkjnjk</h5>
                                <p className='total-price'>fwefgrerge</p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5 className='total'>$ 100</h5>
                        </div>
                    </div>
                </div>
                <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='total'>Subtotal</p>
                        <p className='total-price'>$ 100</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0 total'>Shipping</p>
                        <p className='mb-0 total-price'>$ 100</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                    <h4 className='total'>Total</h4>
                    <h5 className='total-price'>$ 100</h5>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default CheckOut