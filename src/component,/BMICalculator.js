import React, { useState } from 'react';
import './bmi.css'; // Import your CSS file

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('00');
  const [status, setStatus] = useState('00');

  const calculateBMI = () => {
    if (height === "" || weight === "") {
      alert('Please enter your height and weight');
      return;
    } else {
      let heightValue = parseFloat(height);
      let weightValue = parseFloat(weight);
      let heightMeters = heightValue / 100;
      let bmiValue = (weightValue / (heightMeters * heightMeters)).toFixed(2);
      setBMI(bmiValue);
      if (bmiValue <= 18.4) {
        setStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatus('Normal');
      } else if (bmiValue >= 25 && bmiValue <= 39.9) {
        setStatus('Overweight');
      } else if (bmiValue >= 40) {
        setStatus('Obese');
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>BMI Calculator</h1>
      </div>
      <div className="height">
        <label htmlFor="height" className="height-info">
          Height (CM)
        </label>
        <input
          type="number"
          id="height"
          placeholder="Enter your Height in CM"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="weight">
        <label htmlFor="weight" className="weight-info">
          Weight (KG)
        </label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your Weight in KG"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="calculate-bmi">
        <button id="calculate-bmi" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>
      <div className="result">
        <p>
          Your BMI is <span id="bmi-value">{bmi}</span> and you are{' '}
          <span id="bmi-status">{status}</span>
        </p>
      </div>
    </div>
  );
}

export default BMICalculator;
