import React from "react";

const MockInterviews = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Mock Interview</h1>
          <p className="card-text">
            Welcome to the Mock Interview page. Here you can practice answering
            common interview questions.
          </p>
          <div className="row">
            <div className="col-md-6">
              <h2>Interview Questions</h2>
              <ul>
                <li>What are your strengths?</li>
                <li>Can you tell me about yourself?</li>
                <li>Where do you see yourself in 5 years?</li>
                <li>Why do you want to work here?</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Your Responses</h2>
              <div className="form-group">
                <label htmlFor="strengths">What are your strengths?</label>
                <textarea
                  className="form-control"
                  id="strengths"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="about-yourself">
                  Can you tell me about yourself?
                </label>
                <textarea
                  className="form-control"
                  id="about-yourself"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="five-years">
                  Where do you see yourself in 5 years?
                </label>
                <textarea
                  className="form-control"
                  id="five-years"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="why-work-here">
                  Why do you want to work here?
                </label>
                <textarea
                  className="form-control"
                  id="why-work-here"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterviews;
