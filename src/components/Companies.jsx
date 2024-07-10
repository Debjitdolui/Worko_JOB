import React,{ useContext } from 'react'
import AppContext from "../context/AppContext";
import SearchComponent from './SearchComponent';

const Companies = () => {
  const { companiesdata } = useContext(AppContext);
    console.log(companiesdata);
  return (
    <>
      <SearchComponent/>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {companiesdata?.map((company, index) => (
            <div key={index} className="col">
              <div className="card mb-4 shadow ">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center  border">
                    <img
                      src={company.logo}
                      className="img-fluid rounded-start bg-white "
                      alt={`${company.name} Logo`}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column h-100">
                      <h5 className="card-title mb-3">{company.name}</h5>
                      <p className="card-text mb-2">
                        <span className="badge bg-primary me-2">
                          {company.reviews} ★
                        </span>
                        <span className="text-muted">
                          Salary: {company.salary}
                        </span>
                      </p>
                      <p className="card-text mb-3">{company.details}</p>
                      <p className="card-text mb-3">
                        Locations: {company.locations.join(", ")}
                      </p>
                      <div className="mt-auto">
                        <a href="#" className="btn btn-primary me-2">
                          View Details
                        </a>
                        <button className="btn btn-outline-primary">
                          Request for Referral
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
