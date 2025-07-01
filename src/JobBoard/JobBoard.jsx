import React, { useState, useEffect } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

import "../JobBoard/JobBoard.css";
import { ref, push, set, onValue } from "firebase/database";
import { db } from "../firebaseConfig";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");

  const addJob = () => {
    if (title === "" || salary === "" || city === "") {
      alert("Barlyq joldardy toltirynyz!");
      return;
    }

    const newJob = { title, salary, city };

    const jobsRef = ref(db, "jobs/");
    const newJobRef = push(jobsRef);
    set(newJobRef, newJob);

    setTitle("");
    setSalary("");
    setCity("");  
  };

  useEffect(() => {
    const jobsRef = ref(db, "jobs/");
    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const jobsArray = Object.values(data);
        setJobs(jobsArray);
      } else {
        setJobs([]);
      }
    });
  }, []);

  return (
    <div className="container7">
      <h2>Zhumis qosu</h2>
      <JobForm
        title={title}
        salary={salary}
        city={city}        
        setTitle={setTitle}
        setSalary={setSalary}
        setCity={setCity}    
        addJob={addJob}
      />
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
