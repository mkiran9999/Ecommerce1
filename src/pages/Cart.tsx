import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import watch from "../images/watch.jpg"
import {AiFillDelete} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}/>
      <Breadcrumb title="Cart"/>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                    <h4 className="cart-col-1">product</h4>
                    <h4 className="cart-col-2">price</h4>
                    <h4 className="cart-col-3">Quantity</h4>
                    <h4 className="cart-col-4">Total</h4>
                </div>
                <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className='w-25'>
                            <img src={watch} alt='Product image' className='img-fluid'/>
                        </div>
                        <div className='w-75'>
                            <p>fssvdsf</p>
                            <p>Size : fewf</p>
                            <p>Color : fkk</p>
                        </div>
                    </div>
                    <div className='cart-col-2'>
                        <h5 className="price">$ 100</h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                            <input type='number' min={1} max={10} defaultValue={1} name='' id='' className='form-control'/>
                        </div>
                        <div>
                            <AiFillDelete className='text-danger'/>
                        </div>
                    </div>
                    <div className='cart-col-4'>
                        <h5 className="price">$ 100</h5>
                    </div>
                </div>
            </div>
            <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                    <Link to={'/'} className='button'>
                        Continue To Shopping
                    </Link>
                    <div className="d-flex flex-column align-items-end">
                        <h4>SubTotal : $ 100</h4>
                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to={'/checkout'} className='button'>Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Cart