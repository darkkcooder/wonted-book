import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery"; // Import jQuery
import Accordion from "../Accordion";

// Your component code goes here

const Chapters = () => {
  return (
    <div className="wrapper">
      <div>
        <span>Chapters</span>
        <h2>Chapters we've covered</h2>
      </div>

      <div className="div-div">
        <div className="image-wrapper">
          <div className="sample-div">
            <img
              src="https://wonted-react.vercel.app/assets/images/hero-2.png"
              alt="nobel image" className="imgg"
            ></img>
          </div>

          <div className="new-div">
            <Accordion />
            {/* <Accordion /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chapters;
