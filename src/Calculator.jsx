import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentInput, setCurrentInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [operator, setOperator] = useState('');
  const [newOperator, setNewOperator] = useState(false)

  const handleNumberClick = (num) => {
    if (display === '0') {
      setDisplay(num);
      setCurrentInput(num);
      setOperator('');

    } else if (num === '-') {
      setDisplay(display + num);
      setCurrentInput(currentInput + num);

    } else {
      setDisplay(display + num);
      setCurrentInput(currentInput + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentInput && !operator) {
      setPrevInput(currentInput);
      setCurrentInput('');
      setOperator(op);
      setDisplay(op);
      setNewOperator(true);
  
    } else if (newOperator && op ==='-') {
      setDisplay(op);
      setCurrentInput(op);


    } else if (newOperator) {
      setOperator(op);
      setDisplay(op);

    } else {
      // Normal operator click
      handleEqualsClick();
      setOperator(op);
      setDisplay(op);
      setNewOperator(true);
    }

  };

  const handleDecimalClick = () => {
    if (!currentInput.includes('.')) {
      setDisplay(display + '.');
      setCurrentInput(currentInput + '.');
    }
  };

  const handleEqualsClick = () => {    
    if (prevInput && currentInput && operator) {
      const num1 = parseFloat(prevInput);
      const num2 = parseFloat(currentInput);

      console.log('num1:', num1);
      console.log('num2:', num2);
      let result;


      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }
      console.log('result:', result);

      setDisplay(result.toFixed(6).replace(/\.?0+$/, ''));
      setCurrentInput('');
      setPrevInput(result.toString());
      setOperator('');
      setNewOperator(false);
    }
   
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentInput('');
    setPrevInput('');
    setOperator('');
    setNewOperator(false);
    
  };

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <button id="one" onClick={() => handleNumberClick('1')}>1</button>
      <button id="two" onClick={() => handleNumberClick('2')}>2</button>
      <button id="three" onClick={() => handleNumberClick('3')}>3</button>
      <button id="four" onClick={() => handleNumberClick('4')}>4</button>
      <button id="five" onClick={() => handleNumberClick('5')}>5</button>
      <button id="six" onClick={() => handleNumberClick('6')}>6</button>
      <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
      <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
      <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
      <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
      <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
      <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
      <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
      <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
      <button id="decimal" onClick={handleDecimalClick}>.</button>
      <button id="equals" onClick={handleEqualsClick}>=</button>
      <button id="clear" onClick={handleClearClick}>AC</button>
    </div>
  );
};


export default Calculator;
