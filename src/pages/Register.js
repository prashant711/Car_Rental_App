import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
function Register() {
 const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Register logic here
    console.log('Registering:', { fname, lname, email, password });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <h3 className="text-center mb-4">📝 Sign Up</h3>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">👤 First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">👤 Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">📧 Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">🔐 Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-success">
              ✅ Create Account
            </button>
          </div>

          <p className="text-center">
            Already registered?{" "}
            <Link to="/login" className="fw-semibold text-decoration-none">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;