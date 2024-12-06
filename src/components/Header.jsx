
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  // Function to connect MetaMask wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        console.log("Wallet connected:", accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    console.log("Wallet disconnected.");
  };

  // Toggle connection state
  const handleWalletButtonClick = () => {
    if (walletAddress) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>CrowdConnect</h1>
      </div>
      <nav className="nav">
        <Link to="/start-campaign" className="button">Start Campaign</Link>
        <Link to="/how-it-works" className="button">How It Works</Link>
        <button className="button_cnct" onClick={handleWalletButtonClick}>
          {walletAddress ? `Disconnect Wallet (${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)})` : "Connect Wallet"}
          
        </button>
      </nav>
    </header>
  );
};

export default Header;



