import React from "react";

function JobList({ jobs }) {
  return (
    <ul>
      {jobs.map((job, index) => (
        <li key={index}>
          {job.title} — {job.salary} ₸
        </li>
      ))}
    </ul>
  );
}

export default JobList;
