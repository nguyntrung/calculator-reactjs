import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';
import useCalculator from './useCalculator';

const Calculator = () => {
  const { input, handleButtonClick } = useCalculator();

  const buttons = [
    { value: '7', className: '' },
    { value: '8', className: '' },
    { value: '9', className: '' },
    { value: 'Del', className: '' },
    { value: '4', className: '' },
    { value: '5', className: '' },
    { value: '6', className: '' },
    { value: '/', className: 'operation' },
    { value: '1', className: '' },
    { value: '2', className: '' },
    { value: '3', className: '' },
    { value: '*', className: 'operation' },
    { value: '0', className: '' },
    { value: '%', className: 'operation' },
    { value: '-', className: 'operation' },
    { value: '+', className: 'operation' },
    { value: '.', className: '' },
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
