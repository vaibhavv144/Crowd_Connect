import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { getContract } from "../lib/contract";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchCampaigns = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it to use this feature.");
        return;
      }
  
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = await getContract(signer);
  
      const campaignCount = await contract.campaignCount(); // Replace getCampaignCount with campaignCount
  
      const campaignsData = [];
  
      for (let i = 0; i < Number(campaignCount); i++) {
        const campaign = await contract.campaigns(i);
  
        console.log("Raw campaign data:", campaign);
  
        campaignsData.push({
          title: campaign.name || "Untitled Campaign", // Fallback to avoid undefined
          wallet: campaign.creator || "Unknown",
          daysLeft: campaign.daysLeft ? Number(campaign.daysLeft) : 0,
          backers: campaign.backers ? Number(campaign.backers) : 0,
          progress: campaign.goal && campaign.amountRaised
            ? (Number(campaign.amountRaised) / Number(campaign.goal)) * 100
            : 0,
          image: campaign.imageUrl || "https://via.placeholder.com/150", // Default image
        });
      }
  
      setCampaigns(campaignsData);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      alert(`Error fetching campaigns: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCampaigns();
  }, []);
  

  if (loading) {
    return <div className="loading">Loading campaigns...</div>;
  }

  return (
    <div className="home-container">
      <h1 className="home-title">CrowdConnect</h1>
      <div className="card-grid">
        {campaigns.map((campaign, index) => (
          <div
            className="card"
            key={index}
            onClick={() => navigate(`/card/${index}`)}
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{campaign.title}</h2>
              <p className="card-wallet">{campaign.wallet}</p>
              <p className="card-days-left">{campaign.daysLeft} days left</p>
              <div className="card-progress-bar">
                <div
                  className="card-progress-fill"
                  style={{ width: `${campaign.progress}%` }}
                ></div>
              </div>
              <p className="card-backers">{campaign.backers} Backers</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
