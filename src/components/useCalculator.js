import { useState } from 'react';

const useCalculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (input === 'Error' || input === 'Infinity') {
        if (value !== 'C') {
          return setInput('');
        }
    }

    if (value === '=') {
        if(input.trim() === '') {
            return;
        }
        try {
            setInput(eval(input).toString());
        } catch {
        setInput('Error');
        }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'Del') {
      setInput(input.slice(0, -1));
    } else if (value === '%') {
      setInput(input + '/100');
    } else {
      setInput(input + value);
    }
  };

  return { input, handleButtonClick };
};

export default useCalculator;
