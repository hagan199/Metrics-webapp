import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchDetails } from '../redux/cryptoDetailsSlice';
import '../styles/DetailsPage.css';

const CryptoDetails = () => {
  const { currencyID } = useParams();
  const dispatch = useDispatch();
  const { cryptoDetails } = useSelector((state) => state.cryptoDetails);

  useEffect(() => {
    dispatch(fetchDetails(currencyID));
  }, [currencyID, dispatch]);

  if (!cryptoDetails || cryptoDetails.isLoading) {
    return <div>Loading please wait...</div>;
  }

  return (
    <div className="details-container flex-container">
      <h2 className="details-title">{cryptoDetails.name}</h2>
      <img src={cryptoDetails.icon} alt="crypto icon" className="details-Icon" />
      <div className="details-content-container">
        <div className="details-specifications">
          <span className="details-text">Abbrivation:  </span>
          {cryptoDetails.symbol}
        </div>
        <div className="details-specifications">
          <span className="details-text">MarketCap: $</span>
          {cryptoDetails.marketCap}
        </div>
        <div className="details-specifications">
          <span className="details-text">Exchanges Rate (1H) :</span>
          {cryptoDetails.priceChange1h}
        </div>
        <div className="details-specifications">
          <a href={cryptoDetails.websiteUrl}>{cryptoDetails.websiteUrl}</a>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
