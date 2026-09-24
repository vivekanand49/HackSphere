import React from "react";

function Medicines() {
  return (
    <div className="medicines-page">

      <div className="medicines-header">
        <h1>💊 Medicines & Prescriptions</h1>
        <p>View your prescribed medicines and dosage information.</p>
      </div>

      <div className="medicine-container">

        <div className="medicine-card">
          <div className="medicine-icon">💊</div>

          <h2>Paracetamol</h2>

          <p><strong>Dosage:</strong> 500 mg</p>
          <p><strong>Frequency:</strong> Twice a day</p>
          <p><strong>Duration:</strong> 5 days</p>
          <p><strong>Prescribed by:</strong> General Physician</p>

          <span className="medicine-status">
            Active Prescription
          </span>
        </div>

        <div className="medicine-card">
          <div className="medicine-icon">💊</div>

          <h2>Amoxicillin</h2>

          <p><strong>Dosage:</strong> 500 mg</p>
          <p><strong>Frequency:</strong> Once a day</p>
          <p><strong>Duration:</strong> 7 days</p>
          <p><strong>Prescribed by:</strong> General Physician</p>

          <span className="medicine-status">
            Active Prescription
          </span>
        </div>

        <div className="medicine-card">
          <div className="medicine-icon">💊</div>

          <h2>Vitamin D</h2>

          <p><strong>Dosage:</strong> 1000 IU</p>
          <p><strong>Frequency:</strong> Once a day</p>
          <p><strong>Duration:</strong> 30 days</p>
          <p><strong>Prescribed by:</strong> Doctor</p>

          <span className="medicine-status">
            Active Prescription
          </span>
        </div>

      </div>

    </div>
  );
}

export default Medicines;