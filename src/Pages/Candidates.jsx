import React from "react";
import "./PricePage.css";
import { Link } from 'react-router-dom'

function Candidates() {
  return (
    <div className="construction-container">
      <h1 className="construction-title">Umitkerler beti azirlenude</h1>
      <p className="construction-text">
        Biz sizge ingaily qyzmet korsetu ushin bul betti zhanartyp zhatyrmyz.Zhaqynda qosamyz!
      </p>
      <Link to="/home" className="back-button">Basty betke</Link>
    </div>
  );
}

export default Candidates;
