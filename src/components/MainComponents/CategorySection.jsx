import React from "react";
import "./CategorySection.css";

const categories = [
  { title:"Grafica & Design",positions: 367 },
  { title: "Code & Bagrarlamalau", positions: 312 },
  { title: "Sandyq marketing", positions: 297 },
  { title: "Beine & Animation", positions: 247 },
  { title: "Music & Audio", positions: 204 },
  { title: "Esep & Qarzhy", positions: 117 },
  { title: "Densaulyq & Qutim", positions: 125 },
  { title: "Dereqter & Gylym", positions: 57 },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="section-header">
        <h2>Тanymal sanattar</h2>
        <a href="#">Барлығын қарау</a>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
              <h3>{category.title}</h3>
              <p>{category.positions} Open position</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
