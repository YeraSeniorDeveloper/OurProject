import React, { useState } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");

  const addJob = () => {
    if (title === "" || salary === "") {
      alert("Eki zholdyda toltyrunyz!");
      return;
    }

    const newJob = { title, salary };
    setJobs([...jobs, newJob]);

    setTitle("");
    setSalary("");
  };

  return (
    <div>
      <h2>Jumis tabu/qosu</h2>
      <JobForm
        title={title}
        salary={salary}
        setTitle={setTitle}
        setSalary={setSalary}
        addJob={addJob}
      />
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
