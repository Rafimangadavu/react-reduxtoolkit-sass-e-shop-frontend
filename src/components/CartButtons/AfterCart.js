import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/cart';
import "../../styles/CartButtons.css";

const AfterCart = ({cartCount, productID}) => {
    
    const dispatch = useDispatch();

  return (
    <div className="after-cart">
        <button className="cart-counter-button" onClick={(()=>(dispatch(decrement(productID))))}>-</button>
        <div className="cart-count">{cartCount}</div>
        <div className="cart-counter-button" onClick={(()=>(dispatch(increment(productID))) )}>+</div>
    </div>
  )
}

export default AfterCart