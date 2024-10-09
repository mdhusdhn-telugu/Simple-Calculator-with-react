import { useState, useRef } from 'react';
import './App.css';

function App() {
  const resultRef = useRef(null);
  const [inputValue, setInputValue] = useState(''); 
  const [result, setResult] = useState(0); 
  const [operation, setOperation] = useState(''); 
  const [firstNumber, setFirstNumber] = useState(null);  

  function handleNumberClick(e, number) {
    e.preventDefault();
    setInputValue((prevValue) => prevValue + number); 
  }

  function handleOperation(e, operator) {
    e.preventDefault();
    setFirstNumber(Number(inputValue)); 
    setOperation(operator); 
    setInputValue(''); 
  }

  function calculateResult(e) {
    e.preventDefault();
    const secondNumber = Number(inputValue); 

    if (operation === '+') {
      setResult(firstNumber + secondNumber);
    } else if (operation === '-') {
      setResult(firstNumber - secondNumber);
    } else if (operation === 'x') {
      setResult(firstNumber * secondNumber);
    } else if (operation === '/') {
      setResult(firstNumber / secondNumber);
    } else if(operation === '%') {
      setResult(firstNumber % secondNumber);
    }
    else if (operation === 'x²') {
      setResult(firstNumber ** 2);
    } else if (operation === 'x³') {
      setResult(firstNumber ** 3);
    }

    setInputValue('');
    setOperation('');
    setFirstNumber(null);
  }

  function resetAll(e) {
    e.preventDefault();
    setInputValue('');
    setResult(0);
  }

  return (
    <div className="App-content">
      <div className='App'>
        <h1> Simple Calculator</h1>
        <form>
          <input 
            type="text" 
            value={inputValue} 
            placeholder="Press a number" 
            readOnly 
          />
          <p ref={resultRef}>Result: {result}</p>
          <div className="button-container">
          <button className="double-width" onClick={resetAll}>Reset All</button>
            <button onClick={(e) => handleOperation(e, '+')}>+</button>
            <button onClick={(e) => handleOperation(e, '-')}>-</button>
            <button onClick={(e) => handleOperation(e, 'x')}>x</button>
            <button onClick={(e) => handleNumberClick(e, '1')}>1</button>
            <button onClick={(e) => handleNumberClick(e, '2')}>2</button>
            <button onClick={(e) => handleNumberClick(e, '3')}>3</button>
            <button onClick={(e) => handleOperation(e, 'x²')}>x²</button>
            <button onClick={(e) => handleOperation(e, 'x³')}>x³</button>
            <button onClick={(e) => handleNumberClick(e, '4')}>4</button>
            <button onClick={(e) => handleNumberClick(e, '5')}>5</button>
            <button onClick={(e) => handleNumberClick(e, '6')}>6</button>
            <button onClick={(e) => handleNumberClick(e, '(')}>(</button>
            <button onClick={(e) => handleNumberClick(e, ')')}>)</button>
            <button onClick={(e) => handleNumberClick(e, '7')}>7</button>
            <button onClick={(e) => handleNumberClick(e, '8')}>8</button>
            <button onClick={(e) => handleNumberClick(e, '9')}>9</button>
            <button onClick={(e) => handleOperation(e, '%')}>%</button> 
            <button onClick={(e) => handleOperation(e, '/')}>/</button>
            <button onClick={(e) => handleNumberClick(e, '0')}>0</button>
            <button onClick={(e) => handleNumberClick(e, '.')}>.</button>
            <button className="triple-width" onClick={calculateResult}>=</button> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
