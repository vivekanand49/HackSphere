import React from "react";

function About() {
  return (
    <div className="about-page">

      <div className="about-header">
        <h1>🏥 About SEVAHEALTH</h1>
        <p>Healthcare for Everyone</p>
      </div>

      <div className="about-container">

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            SEVAHEALTH aims to make healthcare services more
            accessible and easier to reach, especially for rural
            and underserved communities.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Services</h2>

          <p>
            Our platform provides access to healthcare facilities,
            appointments, teleconsultation, medicines, health
            records and emergency assistance.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Goal</h2>

          <p>
            We aim to provide a simple digital platform that helps
            users access important healthcare services from one place.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;