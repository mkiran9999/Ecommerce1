import React from 'react'
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch1 from "../images/watch-1.png"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

function ProductCard() {
  return (
    <div className='col-3'>
        <Link to={'product/:id'} className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt='Wishlist'/>
                </button>
            </div>
            <div className="product-image">
                <img src={watch} className="img-fluid" alt='product image' />
                <img src={watch1} className="img-fluid" alt='product image' />
            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi coloured for students
                </h5>
                <ReactStars
                    count={5}
                    value = {4}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                />
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt='compare' />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt='view' />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={addcart} alt='add cart' />
                    </button>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard