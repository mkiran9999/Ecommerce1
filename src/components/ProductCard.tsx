import React from 'react'
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div className='col-3'>
        <Link to={'product/:id'} className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link to={''}>
                    <img src='images/wish.svg' alt='Wishlist'/>
                </Link>
            </div>
            <div className="product-image">
                <img src='images/watch.jpg' className="img-fluid" alt='product image' />
                <img src='images/watch-1.png' className="img-fluid" alt='product image' />
            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi coloured for students
                </h5>
                <ReactStars
                    count={5}
                    value = "4"
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                />
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column gap-15'>
                    <Link to={''}>
                        <img src='images/prodcompare.svg' alt='compare' />
                    </Link>
                    <Link to={''}>
                        <img src='images/view.svg' alt='view' />
                    </Link>
                    <Link to={''}>
                        <img src='images/add-cart.svg' alt='add cart' />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard