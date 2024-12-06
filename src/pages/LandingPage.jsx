import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = () => {
    navigate("/Home"); // Redirect to the home page (adjust route if needed)
  };

  return (
    <div className="landing-container">
      {/* Left Section */}
      <div className="left-section">
        <img
          src="/logo.png"
          alt="Website Logo"
          className="website-logo"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h1>Welcome to CrowdConnect</h1>
        <p>
          CrowdConnect empowers people to collaborate on projects, fund ideas,
          and bring innovative concepts to life. Join our community and be a
          part of the change you want to see in the world!
        </p>
        <button className="connect-button" onClick={handleRedirect}>
          Connect with Crowd
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

