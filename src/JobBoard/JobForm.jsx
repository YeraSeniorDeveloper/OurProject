import React from "react";
import "../JobBoard/JobBoard.css";

function JobForm({ title, salary, city, setTitle, setSalary, setCity, addJob }) {
  return (
    <form className="job-form">
      <input
        className="input"
        type="text"
        placeholder="Jumistin ataui"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Zhalaqy"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Qala"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="joinbutton" type="button" onClick={addJob}>
        Zharialau
      </button>
    </form>
  );
}

export default JobForm;
