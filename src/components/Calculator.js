import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input));
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === '%') {
      setInput(input + '/100');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    { value: '7', className: '' },
    { value: '8', className: '' },
    { value: '9', className: '' },
    { value: '/', className: 'operation' },
    { value: '4', className: '' },
    { value: '5', className: '' },
    { value: '6', className: '' },
    { value: '*', className: 'operation' },
    { value: '1', className: '' },
    { value: '2', className: '' },
    { value: '3', className: '' },
    { value: '-', className: 'operation' },
    { value: '0', className: '' },
    { value: '.', className: '' },
    { value: '%', className: 'operation' },
    { value: '+', className: 'operation' },
    { value: 'C', className: '' },
    { value: '=', className: 'equal' },
  ];

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            value={btn.value}
            onClick={handleButtonClick}
            className={btn.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
