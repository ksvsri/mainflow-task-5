// src/History.js
import React from 'react';
import './Calculator.css';

const History = ({ history, clearHistory }) => {
  return (
    <div className="history">
      <h2>
        History
        <button className="clear-history" onClick={clearHistory}>Clear</button>
      </h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;