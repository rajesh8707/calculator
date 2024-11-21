import { useState } from 'react';
import './App.css';

function App() {
  const [equation, setEquation] = useState("");

  const handleKeyPress = (key) => {
    setEquation(equation + key);
  };

  const calculate = () => {
    try {
      const result = eval(equation); // Evaluate the equation
      setEquation(String(result)); // Ensure the result is always a string
    } catch {
      setEquation("Error");
    }
  };

  const handleClear = () => {
    if (equation) {
      setEquation(equation.substring(0, equation.length - 1)); // Safely remove the last character
    }
  };

  const handleClearAll = () => {
    setEquation("");
  };

  return (
    <>
      <div className="background">
        <div className="calculator">
          <input
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            type="text"
            className="display"
          />
          <div className="keypad">
            <button className="key clrbtn" onClick={handleClear}>C</button>
            <button className="key clrbtn" onClick={handleClearAll}>CE</button>
            <button className="key oprbtn" onClick={() => handleKeyPress("%")}>%</button>
            <button className="key oprbtn" onClick={() => handleKeyPress("/")}>/</button>

            <button className="key numbtn" onClick={() => handleKeyPress("7")}>7</button>
            <button className="key numbtn" onClick={() => handleKeyPress("8")}>8</button>
            <button className="key numbtn" onClick={() => handleKeyPress("9")}>9</button>
            <button className="key oprbtn" onClick={() => handleKeyPress("*")}>x</button>

            <button className="key numbtn" onClick={() => handleKeyPress("4")}>4</button>
            <button className="key numbtn" onClick={() => handleKeyPress("5")}>5</button>
            <button className="key numbtn" onClick={() => handleKeyPress("6")}>6</button>
            <button className="key oprbtn" onClick={() => handleKeyPress("-")}>-</button>

            <button className="key numbtn" onClick={() => handleKeyPress("1")}>1</button>
            <button className="key numbtn" onClick={() => handleKeyPress("2")}>2</button>
            <button className="key numbtn" onClick={() => handleKeyPress("3")}>3</button>
            <button className="key oprbtn" onClick={() => handleKeyPress("+")}>+</button>

            <button className="key numbtn" onClick={() => handleKeyPress("00")}>00</button>
            <button className="key numbtn" onClick={() => handleKeyPress("0")}>0</button>
            <button className="key numbtn" onClick={() => handleKeyPress(".")}>.</button>
            <button className="key eqlbtn" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
