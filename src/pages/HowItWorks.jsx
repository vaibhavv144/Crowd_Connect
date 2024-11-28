import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <header className="navbar">
        {/* <div className="logo">YourLogo</div> */}
        <nav className="nav-links">
          <a href="/solutions">Solutions</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
         
        </nav>
      </header>

      <main className="content">
        <h1>How It Works</h1>
        <p>Discover how our platform transforms your ideas into reality.</p>
        <button className="learn-more-btn">
          Learn More <span>→</span>
        </button>
      </main>

      <div className="floating-elements">
        {/* Decorative 3D shapes */}
        <div className="circle"></div>
        <div className="cube"></div>
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default HowItWorks;
