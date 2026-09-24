import React from "react";

function Emergency() {
  return (
    <div className="emergency-page">

      <div className="emergency-header">
        <h1>🚑 Emergency Help</h1>
        <p>Get quick access to emergency healthcare assistance.</p>
      </div>

      <div className="emergency-container">

        <div className="emergency-card">
          <div className="emergency-icon">🚑</div>

          <h2>Emergency Ambulance</h2>

          <p>
            Call an ambulance immediately for urgent medical emergencies.
          </p>

          <a href="tel:108">
            <button>📞 Call 108</button>
          </a>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">🏥</div>

          <h2>Nearest Hospital</h2>

          <p>
            Find nearby hospitals and emergency healthcare centres.
          </p>

          <button>🏥 Find Hospital</button>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">👨‍⚕️</div>

          <h2>Emergency Doctor</h2>

          <p>
            Get quick access to emergency medical consultation.
          </p>

          <button>📹 Consult Doctor</button>
        </div>

      </div>

      <div className="emergency-warning">
        <h3>⚠️ Important</h3>
        <p>
          For serious or life-threatening emergencies, contact
          emergency medical services immediately.
        </p>
      </div>

    </div>
  );
}

export default Emergency;