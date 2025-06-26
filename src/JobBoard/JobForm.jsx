import React from "react";

function JobForm({ title, salary, setTitle, setSalary, addJob }) {
  return (
    <form>
      <input className="input"
        type="text"
        placeholder="Jumistin aty"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className="input"
        type="text"
        placeholder="Zhalaqy"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button className="joinbutton" type="button" onClick={addJob}>
        Zhumusty zharialau
      </button>
    </form>
  );
}

export default JobForm;