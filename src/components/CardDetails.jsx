import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams(); // Get the card ID from the URL
  const navigate = useNavigate();

  // Simulating a campaign fetch based on ID
  const campaigns = [
    {
      id: 1,
      title: "Creating a Household Robot",
      wallet: "0x15...1ea2",
      daysLeft: 2,
      backers: 14,
      progress: 50,
      image: "https://via.placeholder.com/300",
    },
    // Add more campaigns...
  ];

  const campaign = campaigns.find((c) => c.id === parseInt(id));

  if (!campaign) {
    return <p>Campaign not found.</p>;
  }

  const handleEdit = () => {
    alert("Edit functionality coming soon!");
  };

  const handleDelete = () => {
    alert("Delete functionality coming soon!");
    navigate("/");
  };

  return (
    <div className="card-details-container">
      <img src={campaign.image} alt={campaign.title} className="details-image" />
      <h1>{campaign.title}</h1>
      <p><strong>Wallet:</strong> {campaign.wallet}</p>
      <p><strong>Days Left:</strong> {campaign.daysLeft}</p>
      <p><strong>Backers:</strong> {campaign.backers}</p>
      <div className="details-buttons">
        <button onClick={handleEdit}>Edit Card</button>
        <button onClick={handleDelete}>Delete Card</button>
      </div>
    </div>
  );
};

export default CardDetails;
