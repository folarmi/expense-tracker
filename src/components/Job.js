import React from "react";
import { Link } from "react-router-dom";

function Job({ id, company, company_logo, title, type, location }) {
  return (
    <Link to={`/job/${id}`}>
      <div className="job-card">
        <div className="job-logo">
          <img src={company_logo} alt="" />
        </div>
        <div className="job-detail">
          <p className="company">{company}</p>
          <p className="job-title">{title}</p>
          <p className="job-type">{type}</p>
        </div>
      </div>
    </Link>
  );
}

export default Job;
