import React, { useState } from "react";

function Appointments() {
  const [appointment, setAppointment] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });

    setBooked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !appointment.doctor ||
      !appointment.date ||
      !appointment.time ||
      !appointment.reason
    ) {
      alert("Please fill all the appointment details.");
      return;
    }

    setBooked(true);
  };

  return (
    <div className="appointments-page">

      <div className="appointments-header">
        <h1>📅 Appointments</h1>
        <p>Book and manage your healthcare appointments.</p>
      </div>

      <div className="appointment-card">

        <h2>Book an Appointment</h2>

        <form onSubmit={handleSubmit}>

          <label>Select Doctor</label>
          <select
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
          >
            <option value="">Select a doctor</option>
            <option value="General Physician">
              General Physician
            </option>
            <option value="Cardiologist">
              Cardiologist
            </option>
            <option value="Dermatologist">
              Dermatologist
            </option>
            <option value="Pediatrician">
              Pediatrician
            </option>
          </select>

          <label>Select Date</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
          />

          <label>Select Time</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
          />

          <label>Reason for Visit</label>
          <textarea
            name="reason"
            placeholder="Enter your health concern"
            value={appointment.reason}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            📅 Book Appointment
          </button>

        </form>

        {booked && (
          <div className="appointment-success">
            <h3>✅ Appointment Booked Successfully!</h3>

            <p>
              <strong>Doctor:</strong> {appointment.doctor}
            </p>

            <p>
              <strong>Date:</strong> {appointment.date}
            </p>

            <p>
              <strong>Time:</strong> {appointment.time}
            </p>

            <p>
              <strong>Reason:</strong> {appointment.reason}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Appointments;