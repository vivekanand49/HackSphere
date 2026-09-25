import React, { useState } from "react";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>📞 Contact SEVAHEALTH</h1>
        <p>We are here to help you with your healthcare needs.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>📞 <strong>Emergency:</strong> 108</p>
          <p>📧 <strong>Email:</strong> support@sevahealth.com</p>
          <p>🏥 <strong>Healthcare Support:</strong> Available 24/7</p>
          <p>📍 <strong>Service:</strong> Rural & Urban Healthcare</p>
        </div>

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Message</label>
            <textarea
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit">
              📩 Send Message
            </button>

          </form>

          {messageSent && (
            <div className="contact-success">
              ✅ Your message has been submitted successfully!
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Contact;