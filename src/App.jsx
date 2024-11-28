import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StartCampaign from './pages/StartCampaign';
import HowItWorks from './pages/HowItWorks';
import ConnectWallet from './pages/ConnectWallet';
import LandingPage from './pages/LandingPage';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<Home />} />
        
        <Route path="/start-campaign" element={<StartCampaign />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
