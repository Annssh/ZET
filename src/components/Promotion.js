import React from "react";
import "./Promotion.css"
import image from "../images/1.png"
import googlelogo from "../images/googleplay.png"

const Promotion = () => {
    return (
      <div id="promotion">
        <div className="innerdata">
          <div style={{ width: "90%" }} className="innerdata">
            <h2>
              Become a Financial Advisor and{" "}
              <font style={{ color: "blue" }}>
                <h2>Earn Rs.1 Lakh/Month</h2>
              </font>
              <p>No Investment Requirment</p>
              <img src={googlelogo} alt="logo" id="googleimg"/>
            </h2>
          </div>
          <div className="innerdata">
            <img src={image} alt="image" id="image" />
          </div>
        </div>
      </div>
    );
}

export default Promotion