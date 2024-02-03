import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';
import { IoBag } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchedProducts } from '../../slices/itemSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import CartPage from '../CartPage/CartPage';
const Header = () => {
  const [searchItem, setSearchItem] = useState('');
  const [cartPageToggle, setCartPageToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.items.productList.products);
  const cartItem = useSelector((state) => state.items.cartItems);
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      addSearchedProducts(
        productItem.filter((item) =>
          item.title.toLowerCase().includes(searchItem.toLowerCase())
        )
      )
    );
    setSearchItem('');
  };
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo-links-container">
          <Link className="logo">MyShop</Link>
          <ul className="nav-links">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="nav-search-profile-cart-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search here..."
              value={searchItem}
              onChange={handleChange}
            />
            <Link
              to="/searchedProducts"
              onClick={handleClick}
              className="search-btn"
            >
              Search
            </Link>
          </div>
          <FaUserCircle />
          <div className="cart">
            <div onClick={() => setCartPageToggle(!cartPageToggle)}>
              <IoBag />
            </div>
            <p className="itemCount">{cartItem.length}</p>
          </div>
          <div className="hamburger-icon" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </div>
        </div>

        {toggle && (
          <div className="nav-small-device">
            <ul className="nav-links">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </div>
        )}

        {cartPageToggle && (
          <div className="cart-page">
            <CartPage />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
