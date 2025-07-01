import React, { useState, useEffect } from "react";
import JobList from "../JobBoard/JobList";
import { ref, onValue } from "firebase/database";
import { db } from "../firebaseConfig";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import "./FindJob.css";

function FindJob() {
  const [jobs, setJobs] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [city, setCity] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const jobsRef = ref(db, "jobs/");
    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const jobsArray = Object.values(data);
        setJobs(jobsArray);
        setFilteredJobs(jobsArray);
      } else {
        setJobs([]);
        setFilteredJobs([]);
      }
    });
  }, []);

  const handleSearch = () => {
    const result = jobs.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(searchTitle.toLowerCase());
      const cityMatch = job.city.toLowerCase().includes(city.toLowerCase());
      return titleMatch && cityMatch;
    });
    setFilteredJobs(result);
  };

  return (
    <div className="container7">
      <h2 className="findjob-title">Barlyq bos vacanciyalar</h2>

      <div className="filter-bar">
        <div className="filter-item">
          <FaSearch className="filter-icon" />
          <input
            type="text"
            placeholder="Jumıstın aty"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-item">
          <FaMapMarkerAlt className="filter-icon" />
          <input
            type="text"
            placeholder="Qala"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="filter-input"
          />
        </div>

        <button onClick={handleSearch} className="search-button">
          Іzdeu
        </button>
      </div>

      <JobList jobs={filteredJobs} />
    </div>
  );
}

export default FindJob;
