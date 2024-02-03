import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './ProductCard.css';
import { addToCart } from '../../slices/itemSlice';
import { useDispatch } from 'react-redux';
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      {item && (
        <div className="product-card">
          <div className="product-tumb">
            <img src={item.thumbnail} alt="product Image" />
          </div>
          <div className="product-details">
            <h4>
              <Link to={'productDetails/' + item.id}>{item.title}</Link>
            </h4>
            <p>{item.brand}</p>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>
                  $
                  {Math.round(item.price / (1 - item.discountPercentage / 100))}
                </small>
                ${item.price}
              </div>
              <div className="product-links">
                <Button
                  label="Add To Cart"
                  classname="add-to-cart-btn"
                  handleClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
