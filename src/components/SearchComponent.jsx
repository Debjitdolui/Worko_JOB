import React from "react";

const SearchComponent = () => {
  return (
    <div className="container search-container mt-5">
      <h3 className="text-center mb-4">
        Enter Company name and place where you want job
      </h3>
      <div className="row gx-3">
        <div className="col-md-5 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Company name"
            aria-label="Company name"
          />
        </div>
        <div className="col-md-5 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Location"
            aria-label="Location"
          />
        </div>
        <div className="col-md-2 mb-3 d-grid">
          <button className="btn btn-primary">Find jobs</button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
