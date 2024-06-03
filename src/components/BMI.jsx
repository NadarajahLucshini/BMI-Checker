import React, { useState, useEffect } from 'react';
import './style.css';

function BMI() {

  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [healthTips, setHealthTips] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [bmiHistory, setBmiHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    setBmiHistory(storedHistory);
  }, []);

  const updateBmiHistory = (newBmi) => {
    const newHistory = [...bmiHistory, { bmi: newBmi, date: new Date().toLocaleDateString() }];
    setBmiHistory(newHistory);
    localStorage.setItem('bmiHistory', JSON.stringify(newHistory));
  };

  const handleHeightUnitChange = (event) => {
    setHeightUnit(event.target.value);
  };

  const handleWeightUnitChange = (event) => {
    setWeightUnit(event.target.value);
  };

  const convertToMetric = (height, weight) => {
    let heightInCm = height;
    let weightInKg = weight;

    if (heightUnit === 'ft') {
      heightInCm = height * 30.48; // convert feet to cm
    }

    if (weightUnit === 'lb') {
      weightInKg = weight * 0.453592; // convert pounds to kg
    }

    return { heightInCm, weightInKg };
  };

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const { heightInCm, weightInKg } = convertToMetric(height, weight);
      let bmi = Number(weightInKg / (heightInCm / 100) ** 2).toFixed(2);
      setBmi(bmi);
      updateBmiHistory(bmi); // Call the function to update BMI history

      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a normal weight');
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }

      setHealthRecommendations(bmi);
    }
  };

  let setHealthRecommendations = (bmi) => {
    let tips = '';
    if (bmi < 18.5) {
      tips = 'Consider eating more frequently and choosing nutrient-rich foods to gain weight healthily.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      tips = 'Great job! Continue maintaining a balanced diet and regular physical activity to stay healthy.';
    } else if (bmi >= 25 && bmi < 29.9) {
      tips = 'Incorporate more physical activity into your routine and focus on a balanced diet to manage your weight.';
    } else {
      tips = 'Consult with a healthcare provider for personalized advice and consider a weight management plan.';
    }
    setHealthTips(tips);
  };

  // show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require('../assets/underweight.png');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      imgSrc = require('../assets/normal.png');
    } else if (bmi >= 25 && bmi < 29.9) {
      imgSrc = require('../assets/overweight.png');
    } else {
      imgSrc = require('../assets/obese.png');
    }
  }

  let reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setMessage('');
    setHealthTips('');
    setHeightUnit('cm');
    setWeightUnit('kg');
    setBmiHistory([]);
    localStorage.removeItem('bmiHistory'); // Clear the history from local storage
  };

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Height ({heightUnit})</label>
            <input value={height} placeholder={`Height in ${heightUnit}`} onChange={(event) => setHeight(event.target.value)} />
            <select value={heightUnit} onChange={handleHeightUnitChange}>
              <option value="cm">cm</option>
              <option value="ft">ft</option>
            </select>
          </div>
          <div>
            <label>Weight ({weightUnit})</label>
            <input value={weight} placeholder={`Weight in ${weightUnit}`} onChange={(e) => setWeight(e.target.value)} />
            <select value={weightUnit} onChange={handleWeightUnitChange}>
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
          <p>{healthTips}</p>
        </div>

        <div className='history'>
          <h3>BMI History</h3>
          <ul>
            {bmiHistory.map((entry, index) => (
              <li key={index}>Date: {entry.date}, BMI: {entry.bmi}</li>
            ))}
          </ul>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default BMI;
