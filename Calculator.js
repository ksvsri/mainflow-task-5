// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';
import History from './History';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleEqual = () => {
    try {
      const evaluation = evaluate(input);
      setResult(evaluation);
      setHistory((prev) => [...prev, `${input} = ${evaluation}`]);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {['7', '8', '9', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={isNaN(value) ? 'operator' : ''}
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={isNaN(value) ? 'operator' : ''}
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={isNaN(value) ? 'operator' : ''}
            >
              {value}
            </button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <button
              key={value}
              onClick={() => (value === '=' ? handleEqual() : handleButtonClick(value))}
              className={isNaN(value) && value !== '.' ? 'operator' : ''}
            >
              {value}
            </button>
          ))}
          <button onClick={handleClear} className="clear">C</button>
        </div>
      </div>
      <History history={history} clearHistory={handleClearHistory} />
    </div>
  );
};

export default Calculator;