import React from 'react';
import './Calculator.css';

const History = ({ history, onClearHistory }) => {
  return (
    <div className="history">
      <h3>History</h3>  
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Calculation</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="clear-button" onClick={onClearHistory}>Clear</button>
    </div>
  );
};

export default History;
