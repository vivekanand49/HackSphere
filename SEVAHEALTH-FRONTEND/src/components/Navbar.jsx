import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <div>
        <h2>🏥 SEVAHEALTH</h2>
      </div>

      <div>

        <Link to="/">
          Home
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/login">
          <button>
            Login
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;