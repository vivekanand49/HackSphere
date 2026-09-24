import React from "react";

function HealthRecords() {
  return (
    <div className="health-records-page">

      <div className="health-records-header">
        <h1>📋 Health Records</h1>
        <p>View and manage your health reports and medical records.</p>
      </div>

      <div className="records-container">

        <div className="record-card">
          <div className="record-icon">🩸</div>
          <h2>Blood Test Report</h2>
          <p><strong>Date:</strong> 20 September 2026</p>
          <p><strong>Type:</strong> Laboratory Report</p>

          <button>👁️ View Report</button>
        </div>

        <div className="record-card">
          <div className="record-icon">❤️</div>
          <h2>Health Checkup</h2>
          <p><strong>Date:</strong> 15 September 2026</p>
          <p><strong>Type:</strong> General Checkup</p>

          <button>👁️ View Report</button>
        </div>

        <div className="record-card">
          <div className="record-icon">🩺</div>
          <h2>Doctor Consultation</h2>
          <p><strong>Date:</strong> 10 September 2026</p>
          <p><strong>Type:</strong> Consultation Record</p>

          <button>👁️ View Report</button>
        </div>

      </div>

    </div>
  );
}

export default HealthRecords;