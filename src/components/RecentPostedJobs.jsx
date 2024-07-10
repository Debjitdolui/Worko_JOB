import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const RecentPostedJobs = () => {
  const { recentjob } = useContext(AppContext);

  if (!recentjob || recentjob.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading recent job posts...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Recent Job Postings</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {recentjob.map((job, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-primary">{job.position}</h5>
                <p className="card-text">{job.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Company:</strong> {job.company}
                  </li>
                  <li className="list-group-item">
                    <strong>Location:</strong> {job.location}
                  </li>
                  <li className="list-group-item">
                    <strong>Rating:</strong> {job.rating} / 5
                  </li>
                  <li className="list-group-item">
                    <strong>Salary:</strong> ${job.salary}
                  </li>
                </ul>
                <a href="#" className="btn btn-primary mt-3 w-100">
                  Apply Now
                </a>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPostedJobs;
