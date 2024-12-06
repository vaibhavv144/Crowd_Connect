import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { getContract } from "../lib/contract";
import "./StartCampaign.css";

const StartCampaign = () => {
  const navigate = useNavigate();

  const [targetAmount, setTargetAmount] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [endDate, setEndDate] = useState("");

  const startCampaignHandler = async (e) => {
    e.preventDefault();

    try {
      console.log("Ethers:", ethers);

      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it to use this feature.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = await getContract(signer);

      const goal = ethers.parseEther(targetAmount);
      const durationInDays = Math.ceil((new Date(endDate) - new Date()) / (1000 * 60 * 60 * 24));
      const description = `${campaignName}: ${campaignDescription}`;

      const tx = await contract.createCampaign(goal, durationInDays, description);
      await tx.wait();

      alert("Campaign successfully created!");
      navigate("/");
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert(`Error creating campaign: ${error.message}`);
    }
  };

  return (
    <div className="start-campaign-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <h1 className="heading">
        Create a New Campaign <span role="img" aria-label="megaphone">📢</span>
      </h1>
      <form className="campaign-form" onSubmit={startCampaignHandler}>
        <div className="form-group">
          <label htmlFor="minContribution">Minimum Contribution Amount</label>
          <div className="input-group">
            <input
              type="number"
              id="minContribution"
              placeholder="Enter amount"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
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
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="campaignDescription">Campaign Description</label>
          <textarea
            id="campaignDescription"
            placeholder="Enter campaign description"
            value={campaignDescription}
            onChange={(e) => setCampaignDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="connect-wallet-button" type="submit">
          Start Campaign
        </button>
      </form>
    </div>
  );
};

export default StartCampaign;
