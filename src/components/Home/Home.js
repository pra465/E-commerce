import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../slices/itemSlice';
const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.productList.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(items.length / 8) &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  return (
    <div>
      <div className="product-card-container">
        {items &&
          items
            .slice(page * 8 - 8, page * 8)
            .map((item) => <ProductCard item={item} />)}
      </div>
      {items && (
        <div className="pagination">
          <span
            className={page > 1 ? '' : 'pagination_disable'}
            onClick={() => selectPageHandler(page - 1)}
          >
            Previous
          </span>
          {[...Array(Math.ceil(items.length / 8))].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? 'page_selected' : ''}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < items.length / 8 ? '' : 'pagination_disable'}
            onClick={() => selectPageHandler(page + 1)}
          >
            Next
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
