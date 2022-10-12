import React from 'react';
import products from '../api/product.json';
import AfterCart from './CartButtons/AfterCart';
import BeforeCart from './CartButtons/BeforeCart';
import { useSelector } from 'react-redux';
import '../styles/ProuductList.css';
import CartButtons from './CartButtons';

const ProductList = () => {
  const { cartList} = useSelector((state)=>state.cart);
  console.log(cartList);

  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>

          <CartButtons product={product} />
        </div>
      ))}
    </section>
  );
};

export default ProductList;
