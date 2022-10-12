import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const {cartList=[]}=useSelector(state => state.cart);

  const totalCartCount = useMemo(() => cartList.reduce((acc, value)=> (acc += value.count),0),[cartList]);
  
 
  return (
    <div className='header' >
    <div className="container">
      <h1>E-Shop</h1>
      <div>
      <div className="cart-count">{totalCartCount}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="IconChangeColor"
        height="35"
        width="35"
      >
        {' '}
        <g>
          {' '}
          <path
            fill="none"
            d="M0 0h24v24H0z"
            id="mainIconPathAttribute"
          ></path>{' '}
          <path
            d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            id="mainIconPathAttribute"
            fill="#ffffff"
          ></path>{' '}
        </g>{' '}
      </svg>
      </div>
      </div>
    </div>


    // <header className="header">
    //   <h1>E-Grocery Shop</h1>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //     <NavLink to="/contact">Contact-us</NavLink>
    //     <NavLink to="/users">Users</NavLink>
    // </header>
  );
};

export default Header;
