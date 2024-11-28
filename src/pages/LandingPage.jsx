import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/home"); // Adjust the route as per your app structure
  };

  return (
    <div className="landing-page-container">
      {/* Logo */}
      <header className="landing-logo">
        <h1 >For the Mankind</h1>
      </header>

      {/* Main Content */}
      <main className="landing-content">
        <h2>Hiii rndom textt</h2>
        <p>More than 100 users active every day.</p>
        <button className="cta-button" onClick={handleRedirect}>
          Connect with Crowd
        </button>
      </main>

      {/* Floating Elements */}
      <div className="floating-elements">
      <div className="circle"></div>
        <div className="cube"></div>
        {/* <div className="ring"></div> */}
      </div>
    </div>
  );
};

export default LandingPage;
