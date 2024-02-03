import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import './ProductDetailPage.css';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../../slices/itemSlice';
import { useDispatch } from 'react-redux';
const ProductDetailPage = () => {
  const { id } = useParams();
  const items = useSelector((state) => state.items.productList.products);
  const itemDetail = items[id - 1];
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(itemDetail));
  };
  return (
    <div>
      <div class="card-wrapper">
        <div class="card">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                {itemDetail.images.map((itemImg) => (
                  <img src={itemImg} alt="Product Image" />
                ))}
              </div>
            </div>
            <div class="img-select">
              {itemDetail.images.map((itemImg) => (
                <div class="img-item">
                  <a href="#" data-id="1">
                    <img src={itemImg} alt="Product Image" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div class="product-content">
            <h2 class="product-title">{itemDetail.title}</h2>
            <div class="product-rating">
              <p>Rating - {itemDetail.rating}</p>
            </div>

            <div class="product-price">
              <p>
                <span class="last-price">
                  $
                  {Math.round(
                    itemDetail.price / (1 - itemDetail.discountPercentage / 100)
                  )}
                </span>{' '}
                <span class="new-price">
                  ${itemDetail.price} ({itemDetail.discountPercentage})
                </span>
              </p>
            </div>

            <div class="product-detail">
              <p>{itemDetail.description}</p>
            </div>

            <div class="purchase-info">
              <Button
                label="Add To Cart"
                classname="add-to-cart-btn"
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
