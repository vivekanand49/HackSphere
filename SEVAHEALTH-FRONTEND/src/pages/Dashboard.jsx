import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h1>🏥 SEVAHEALTH</h1>
          <p>Healthcare for Everyone</p>
        </div>

        <div className="patient-info">
          <span>👤</span>
          <div>
            <strong>Welcome, Patient</strong>
            <small>Patient Dashboard</small>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="dashboard-welcome">
        <h2>Welcome to SEVAHEALTH 👋</h2>
        <p>
          Access healthcare services quickly and easily from one place.
        </p>
      </section>

      {/* Services */}
      <section className="dashboard-services">

        <h2>Healthcare Services</h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <div className="dashboard-icon">🏥</div>
            <h3>Find Healthcare Facility</h3>
            <p>Find nearby hospitals and healthcare centres.</p>
          <button onClick={() => navigate("/facilities")}>
  Find Facility
</button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">📅</div>
            <h3>Appointments</h3>
            <p>Book and manage your doctor appointments.</p>
            <button onClick={() => navigate("/appointments")}>
              View Appointments
            </button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">👨‍⚕️</div>
            <h3>Teleconsultation</h3>
            <p>Consult a doctor online from anywhere.</p>
    <button onClick={() => navigate("/teleconsultation")}>
  Consult Doctor
</button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">💊</div>
            <h3>Medicines</h3>
            <p>View prescriptions and medicine information.</p>
            <button onClick={() => navigate("/medicines")}>
  View Medicines
</button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">📋</div>
            <h3>Health Records</h3>
            <p>Access your health reports and medical records.</p>
           <button onClick={() => navigate("/health-records")}>
  View Records
</button>
          </div>

          <div className="dashboard-card emergency-card">
            <div className="dashboard-icon">🚑</div>
            <h3>Emergency Help</h3>
            <p>Get quick access to emergency healthcare assistance.</p>
            <button onClick={() => navigate("/emergency")}>
  Emergency
</button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Dashboard;