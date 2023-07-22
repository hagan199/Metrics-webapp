import React from 'react';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../styles/CryptoCard.css';

const CryptoCard = ({
  img, name, price, priceChange, symbol,
}) => (
  <div className="crypto-card">
    <div className="crypto-card-arrow">
      <FaArrowAltCircleRight size={25} />
    </div>
    <div className="card-logo-box">
      <img src={img} alt="currency Info" className="logo" />
    </div>
    <div className="left-card card-col">
      <p>
        <span className="crypto-card-title">Name:</span>
        {name}
      </p>
      <p>
        <span className="crypto-card-title">Symbol:</span>
        {symbol}
      </p>
    </div>
    <div className="right-card card-col">
      <p>
        <span className="crypto-card-title">Price: $</span>
        {price.toFixed(2)}
      </p>
      <p>
        <span className="crypto-card-title">Price Change (1W):</span>
        {priceChange}
      </p>
    </div>
  </div>
);

CryptoCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default CryptoCard;
