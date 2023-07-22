import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { v4 as uID } from 'uuid';
import CryptoCard from '../components/CryptoCard';
import notFound from '../images/page-notfound.png';
import { fetchCryptoData } from '../redux/cryptoSlice';
import '../styles/CryptoDashboard.css';

const CryptoDashboard = () => {
  const isInitialFetch = useRef(true);
  const { cryptoArray } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [desiredCurrency, setDesiredCurrency] = useState('');

  useEffect(() => {
    if (isInitialFetch.current) {
      isInitialFetch.current = false;
      dispatch(fetchCryptoData());
    }
  }, [dispatch]);

  const handleClick = (item) => {
    if (item.id) {
      navigate(`details/${item.id}`);
    }
  };

  const filterCryptoArray = () => {
    if (!cryptoArray) {
      return [];
    }

    if (desiredCurrency === '') {
      return cryptoArray;
    }

    return cryptoArray.filter((
      item,
    ) => item.name.toLowerCase().includes(desiredCurrency.toLowerCase()));
  };

  const renderCryptoCards = () => {
    const filteredCryptoArray = filterCryptoArray();

    if (filteredCryptoArray.length === 0) {
      return (
        <div className="no-result">
          <h3 className="no-result-title">Crypto Currency not found.</h3>
          <img src={notFound} alt="No Result Found" className="no-result-img" />
        </div>
      );
    }

    return filteredCryptoArray.map((item) => (
      <div
        key={uID()}
        aria-hidden="true"
        onClick={() => handleClick(item)}
        className="currencyContainer"
      >
        <CryptoCard
          img={item.icon}
          name={item.name}
          price={item.price}
          priceChange={item.priceChange1w}
          symbol={item.symbol}
        />
      </div>
    ));
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          onChange={(e) => setDesiredCurrency(e.target.value)}
          placeholder="Search for a Crypto Currency"
          value={desiredCurrency}
        />
      </div>
      <p className="currency-title dim-bg">Trending Cryptocurrencies</p>
      <div className="main-container">{renderCryptoCards()}</div>
    </>
  );
};

export default CryptoDashboard;
