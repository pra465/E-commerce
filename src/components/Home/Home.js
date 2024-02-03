import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../slices/itemSlice';
const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.productList.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="product-card-container">
      {items && items.map((item) => <ProductCard item={item} />)}
    </div>
  );
};

export default Home;
