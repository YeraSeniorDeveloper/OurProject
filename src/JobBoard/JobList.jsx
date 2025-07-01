import React from "react";
import "../JobBoard/JobBoard.css";

function JobList({ jobs }) {
  return (
    <ul className="job-list">
      {jobs.map((job, index) => (
        <li className="li" key={index}>
          <span>{job.title}</span>
          <span>{job.salary} KZT</span>
          <span>{job.city}</span>
        </li>
      ))}
    </ul>
  );
}

export default JobList;
