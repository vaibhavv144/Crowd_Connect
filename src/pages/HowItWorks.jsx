import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works-page">
      <header className="how-it-works-header">
        <h1>How It Works</h1>
      </header>
      <main className="how-it-works-content">
        {/* <section className="how-it-works-step">
          <h2>Explore Innovative Ideas</h2>
          <p>
            Discover a variety of campaigns and projects from passionate creators across the globe. Browse through our platform to find ideas that resonate with you.
          </p>
        </section> */}
        <section className="how-it-works-step">
          <h2>Create Your Own Campaign</h2>
          <p>
          Got a groundbreaking idea? Start your own campaign with ease:
           Step 1: Sign up and connect your wallet.
Step 2: Share your idea and set your funding goals.
Step 3: Launch your campaign and watch your supporters come together.
         



          </p>
        </section>
        <section className="how-it-works-step">
          <h2>Back Projects You Believe In</h2>
          <p>
            Be a part of the change by supporting campaigns that align with your vision. Your contributions make a difference in the lives of creators and their communities.
          </p>
        </section>
        <section className="how-it-works-step">
          <h2>Transparent Funding</h2>
          <p>
            All transactions are recorded on the blockchain, ensuring transparency and trust. You can track your contributions and their impact.
          </p>
        </section>
        <section className="how-it-works-step">
          <h2>Celebrate Success</h2>
          <p>
            When campaigns meet their goals, the funds are seamlessly transferred to the creator’s wallet. Celebrate the success of the ideas you helped bring to life!
          </p>
        </section>
        <section className="how-it-works-benefits">
          <h2>Why Choose CrowdConnect?</h2>
          <p>
            Empower communities, ensure transparency, connect globally, and enjoy an innovative platform for turning dreams into reality.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
