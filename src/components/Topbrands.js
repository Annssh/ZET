import React from "react";
import axis from "../images/axisbank.png"
import icici from "../images/icicibank.png"
import indusind from "../images/indusindbank.png"
import yes from "../images/yesbank.png"
import "./Topbrands.css"

const Topbrands = () => {
    return (
      <div id="topbrand">
        <div className="main">
          <h4>
            <b>Top Brands on ZET</b>
          </h4>
        </div>
        <div className="main" style={{ fontWeight: "400" }}>
          We are trusted by best brand in the country
        </div>
        <div id="logos">
          <img src={axis} alt="logo" className="banks" />
          <img src={yes} alt="logo" className="banks" />
          <img src={icici} alt="logo" className="banks" />
          <img src={indusind} alt="logo" className="banks" />
        </div>
      </div>
    );
}

export default Topbrands