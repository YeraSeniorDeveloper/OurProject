import React from "react";
import "../App.css";
function JobList({ jobs }) {
  return (
    <ul>
      {jobs.map((job, index) => (
        <li className="li" key={index}>
          <span>{job.title}</span>
          <span>{job.salary} ₸</span>
        </li>
      ))}
    </ul>
  );
}

export default JobList;
