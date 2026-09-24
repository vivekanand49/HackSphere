import React from "react";

function Teleconsultation() {
  return (
    <div className="teleconsultation-page">

      <div className="teleconsultation-header">
        <h1>👨‍⚕️ Teleconsultation</h1>
        <p>Consult a doctor online from anywhere.</p>
      </div>

      <div className="doctor-container">

        <div className="doctor-card">
          <div className="doctor-icon">👨‍⚕️</div>

          <h2>Dr. Rajesh Kumar</h2>
          <p>General Physician</p>
          <p className="doctor-available">
            🟢 Available Now
          </p>

          <button>📹 Start Consultation</button>
        </div>

        <div className="doctor-card">
          <div className="doctor-icon">👩‍⚕️</div>

          <h2>Dr. Priya Sharma</h2>
          <p>Dermatologist</p>
          <p className="doctor-available">
            🟢 Available Now
          </p>

          <button>📹 Start Consultation</button>
        </div>

        <div className="doctor-card">
          <div className="doctor-icon">👨‍⚕️</div>

          <h2>Dr. Arun Kumar</h2>
          <p>Cardiologist</p>
          <p className="doctor-later">
            🟡 Available Later
          </p>

          <button>📅 Schedule Consultation</button>
        </div>

      </div>

    </div>
  );
}

export default Teleconsultation;