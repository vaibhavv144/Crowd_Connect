import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartCampaign.css";

const StartCampaign = () => {
  const navigate = useNavigate();

  return (
    <div className="start-campaign-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <h1 className="heading">
        Create a New Campaign <span role="img" aria-label="megaphone">📢</span>
      </h1>
      <form className="campaign-form">
        <div className="form-group">
          <label htmlFor="minContribution">Minimum Contribution Amount</label>
          <div className="input-group">
            <input
              type="number"
              id="minContribution"
              placeholder="Enter amount"
            />
            <span className="input-group-addon">ETH</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="campaignName">Campaign Name</label>
          <input
            type="text"
            id="campaignName"
            placeholder="Enter campaign name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="campaignDescription">Campaign Description</label>
          <textarea
            id="campaignDescription"
            placeholder="Enter campaign description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            placeholder="Enter image URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="targetAmount">Target Amount</label>
          <input
            type="number"
            id="targetAmount"
            placeholder="Enter target amount"
          />
        </div>
        <button className="connect-wallet-button">Connect Wallet</button>
      </form>
    </div>
  );
};

export default StartCampaign;
