import React from 'react';
import { useNavigate } from 'react-router';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../images/myLogo.png';
import '../styles/Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <nav className="flex-container dim-bg">
      <div className="flex-container navbar">
        <div className="flex-container backward" aria-hidden="true" onClick={handleBackClick}>
          <IoChevronBackSharp size={25} />
        </div>
        <div className="flex-container navbar-title">
          <Link to="/">
            <img src={logo} alt=" My Logo" className="myLogo" />

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
