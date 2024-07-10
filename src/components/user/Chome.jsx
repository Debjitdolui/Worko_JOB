import React from "react";
import { useNavigate } from "react-router-dom";

const Chome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4 border p-3 rounded">
          <h1 className="text-primary">Candidate Home</h1>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Referral or Service ID"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                Referral List
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Referral list should appear here
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white">Services</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Services should appear here</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chome;
