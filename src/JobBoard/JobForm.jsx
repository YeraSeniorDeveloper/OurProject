import React from "react";

function JobForm({ title, salary, setTitle, setSalary, addJob }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Jumistin aty"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Zhalaqy"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button onClick={addJob}>Zhumusty zharialau</button>
    </div>
  );
}

export default JobForm;
