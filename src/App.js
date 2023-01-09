import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("Do Sleep!");
  const [adviceID, setAdviceID] = useState("1");
  const handleAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    handleAdviceId();
    setAdvice(res.data.slip.advice);

  };
  const handleAdviceId = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setAdviceID(res.data.slip.id);
  };
  return (
    <div className="box">
      <div className="text">
      <h3>ADVICE #{adviceID}</h3>
        <div>
          <p>“{advice}”</p>
        </div>
        <hr className="hr1"/>
        <hr className="hr2"/>
        <svg width="6" height="15" className="rect1" ><rect width="6" height="15" className="r1"/></svg>
        <svg width="6" height="15" className="rect2"><rect width="6" height="15" className="r1"/></svg>
        <button onClick={handleAdvice}><img src="dice.png" alt="dice" /></button>
      </div>
      
    </div>
  );
};

export default App;
