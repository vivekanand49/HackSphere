import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Healthcare for Everyone</h1>

          <p>
            Accessible and quality healthcare services for rural
            and underserved communities.
          </p>

          <div className="hero-buttons">
            <button
  className="primary-btn"
  onClick={() => navigate("/facilities")}
>
  Find Healthcare Facility
</button>

        <button
  className="emergency-btn"
  onClick={() => navigate("/emergency")}
>
  🚑 Emergency Help
</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="doctor-icon">👩‍⚕️</div>
          <h2>SEVAHEALTH</h2>
          <p>Care • Connect • Heal</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Healthcare Services</h2>

        <p className="services-subtitle">
          Simple and accessible healthcare services at your fingertips.
        </p>

        <div className="service-container">
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Find Facility</h3>
            <p>
              Find nearby hospitals and healthcare centres.
            </p>
          </div>
<div
  className="service-card"
  onClick={() => navigate("/teleconsultation")}
>
  <div className="service-icon">👨‍⚕️</div>

  <h3>Teleconsultation</h3>

  <p>
    Consult doctors remotely from anywhere.
  </p>
</div>
<div
  className="service-card"
  onClick={() => navigate("/medicines")}
>
  <div className="service-icon">💊</div>

  <h3>Medicines</h3>

  <p>
    Check medicines and prescriptions easily.
  </p>
</div>
<div
  className="service-card"
  onClick={() => navigate("/emergency")}
>
  <div className="service-icon">🚑</div>

  <h3>Emergency</h3>

  <p>
    Get quick access to emergency healthcare assistance.
  </p>
</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
{/* Healthcare Statistics */}
<section className="health-stats">

  <div className="stat-card">
    <div className="stat-icon">🏥</div>
    <h2>100+</h2>
    <p>Healthcare Facilities</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">👨‍⚕️</div>
    <h2>500+</h2>
    <p>Healthcare Professionals</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">👥</div>
    <h2>10,000+</h2>
    <p>Patients Supported</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">🚑</div>
    <h2>24/7</h2>
    <p>Emergency Assistance</p>
  </div>

</section>