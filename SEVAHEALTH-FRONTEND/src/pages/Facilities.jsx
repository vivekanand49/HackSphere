import React from "react";

function Facilities() {
  return (
    <div className="facilities-page">

      <div className="facilities-header">
        <h1>🏥 Find Healthcare Facility</h1>
        <p>Find healthcare centres and hospitals near you.</p>
      </div>

      <div className="facility-search">
        <input
          type="text"
          placeholder="Search hospital or healthcare centre"
        />

        <button>🔍 Search</button>
      </div>

      <div className="facility-container">

        <div className="facility-card">
          <h2>🏥 Primary Health Centre</h2>
          <p>📍 Rural Healthcare Centre</p>
          <p>📞 Contact: 108</p>
          <p>🩺 General Healthcare Services</p>

          <button>View Details</button>
        </div>

        <div className="facility-card">
          <h2>🏥 Community Health Centre</h2>
          <p>📍 Community Healthcare Centre</p>
          <p>📞 Contact: 108</p>
          <p>🩺 General & Emergency Services</p>

          <button>View Details</button>
        </div>

        <div className="facility-card">
          <h2>🏥 District Hospital</h2>
          <p>📍 District Healthcare Facility</p>
          <p>📞 Emergency: 108</p>
          <p>🩺 Specialist Healthcare Services</p>

          <button>View Details</button>
        </div>

      </div>

    </div>
  );
}

export default Facilities;