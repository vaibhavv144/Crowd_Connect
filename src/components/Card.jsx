import React from "react";
import "./Card.css";

function Card({ title, image, progress }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-progress">Donation Progress: {progress}</p>
    </div>
  );
}

export default Card;
