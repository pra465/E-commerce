import React from 'react';
import { useSelector } from 'react-redux';
import './SearchPage.css';
import ProductCard from '../ProductCard/ProductCard';
const SearchPage = () => {
  const searchedItems = useSelector((state) => state.items.searchedProducts);
  console.log(searchedItems);
  return (
    <div className="product-card-container">
      {searchedItems &&
        searchedItems.map((item) => <ProductCard item={item} />)}
    </div>
  );
};

export default SearchPage;
