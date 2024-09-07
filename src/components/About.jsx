// import React from 'react'

import { useState } from "react";

function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="my-4 rounded" style={myStyle}>
      <h1 className="px-3">हमारे बारे में</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="container">
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-info rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={myStyle}
              >
                अकॉर्डियन आइटम #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                इस अकॉर्डियन के लिए प्लेसहोल्डर सामग्री, जिसका उद्देश्य प्रदर्शन
                करना है <code>.accordion-फ्लश</code> वर्ग। यह पहला आइटम
                अकॉर्डियन बॉडी है।
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-info rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={myStyle}
              >
                अकॉर्डियन आइटम #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                इस अकॉर्डियन के लिए प्लेसहोल्डर सामग्री, जिसका उद्देश्य प्रदर्शन
                करना है <code>.accordion-फ्लश</code> वर्ग। यह पहला आइटम
                अकॉर्डियन बॉडी है।
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-info rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={myStyle}
              >
                अकॉर्डियन आइटम #2
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                इस अकॉर्डियन के लिए प्लेसहोल्डर सामग्री, जिसका उद्देश्य प्रदर्शन
                करना है <code>.accordion-फ्लश</code> वर्ग। यह पहला आइटम
                अकॉर्डियन बॉडी है।
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary my-3"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default About;
