import React from "react";
import "./styles.css";
import Card from "../Card";

const Achievements = () => {
  return (
    <div className="Achievement-container">
      <div className="achi-firstdiv">
        <h6>ACHIEVEMENTS</h6>
        <h2>Honors & Awards Achieved</h2>
      </div>
      <div className="achi-wrap-div">
        <div>
            <Card/>
        </div>
        <div>
            <Card/>
        </div>
        
      </div>
    </div>
  );
};

export default Achievements;
