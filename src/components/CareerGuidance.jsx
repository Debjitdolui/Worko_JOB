import React from "react";

const CareerGuidance = () => {
  return (
    <div className="container mt-5 vh-100">
      <div className="card ">
        <div className="card-body">
          <h1 className="card-title">Career Guidance</h1>
          <p className="card-text">
            Welcome to the Career Guidance page. Here you can find resources and
            advice to help you with your career.
          </p>
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">How to Write a Resume</a>
            </li>
            <li>
              <a href="#">Preparing for a Job Interview</a>
            </li>
            <li>
              <a href="#">Networking Tips</a>
            </li>
          </ul>
          <h2>Advice</h2>
          <p>Here are some tips to help you navigate your career:</p>
          <ul>
            <li>Set clear career goals.</li>
            <li>Learn new skills continuously.</li>
            <li>Network with professionals in your field.</li>
            <li>Seek mentorship.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
