import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>CrowdConnect</h1>
    </div>
    <nav className="nav">
      <Link to="/start-campaign" className="button">Start Campaign</Link>
      <Link to="/how-it-works" className="button">How It Works</Link>
      <Link to="/connect-wallet" className="button">Connect Wallet</Link>
    </nav>
  </header>
);

export default Header;
