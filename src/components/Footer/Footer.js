import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3>MyShop</h3>
          <p>
            Welcome to myShop, your premier online shopping app! Explore a
            diverse range of products, enjoy a seamless and secure shopping
            experience, and discover personalized recommendations tailored just
            for you. <br /> Elevate your shopping journey with myShop today!
          </p>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy; <a href="#">MyShop</a>{' '}
          </p>
          <div className="footer-menu">
            <p>Contact: +91 1234567892 | Email: myshop@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
