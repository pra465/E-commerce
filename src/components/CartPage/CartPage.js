import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';
const CartPage = () => {
  const cartItem = useSelector((state) => state.items.cartItems);
  return (
    <div>
      {cartItem.map((item) => (
        <div className="cartItem">
          <img src={item.thumbnail} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
