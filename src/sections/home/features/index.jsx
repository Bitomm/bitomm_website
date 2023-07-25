import React, { useState } from "react";
import "./style.css";

const Features = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (dataValue) => {
    setActiveItem(dataValue);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <>
      <div className="features">
        <a
          className={`seq_item ${activeItem === "1" ? "active" : ""}`}
          href=""
          onMouseEnter={() => handleMouseEnter("1")}
          onMouseLeave={handleMouseLeave}
        >
          Ultra Fast
        </a>
        <a
          className={`seq_item ${activeItem === "2" ? "active" : ""}`}
          href=""
          onMouseEnter={() => handleMouseEnter("2")}
          onMouseLeave={handleMouseLeave}
        >
          Scalable
        </a>
        <a
          className={`seq_item ${activeItem === "3" ? "active" : ""}`}
          href=""
          onMouseEnter={() => handleMouseEnter("3")}
          onMouseLeave={handleMouseLeave}
        >
          Interoperable
        </a>
        <a
          className={`seq_item ${activeItem === "4" ? "active" : ""}`}
          href=""
          onMouseEnter={() => handleMouseEnter("4")}
          onMouseLeave={handleMouseLeave}
        >
          Sustainable
        </a>
        <div className="ellipse2"></div>
      </div>
    </>
  );
};

export default Features;
