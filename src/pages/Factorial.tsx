import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addResult } from '../features/factorialSlice';
import FactorialHistory from "../components/FactorialHistory";

const Factorial = () => {
  const [error, setError] = useState<string>();
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const dispatch = useDispatch();

  const checkInputValue = (val?: string) => {
    if (!val || !/^\d+$/.test(val) || Number(val) <=0) {
      setError('Wprowadź liczbę całkowitą większą od zera');
    } else {
      setError('');
    }
  }

  const factorialArr: (number)[] = [1, 1];

  const factorial = (n:number) => {
    for (let i = factorialArr.length; i <= n; i++) {
      factorialArr.push(i * factorialArr[i-1]);
    }

    return factorialArr[n]
  }
  
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    checkInputValue(value)
  }, [value]);

  useEffect(() => {
    if (!!result) dispatch(addResult(result));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const calcFactorial = () => {
    if (!value || !/^\d+$/.test(value) || Number(value) <= 0) return
    setResult(`${value}! = ${factorial(Number(value))}`);
  }

  return (
    <div className="factorial">
      <h2 className="app__header">Oblicz silnię</h2>
      <label>
        <span>Wprowadź liczbę naturalną: </span>
        <input
          type="text"
          value={value}
          className="app__input"
          onChange={handleInputChange}
        />
      </label>
      <button
        className={(`app__btn ${!!error ? 'app__btn--disabled' : ''}`).trim()}
        disabled={ !!error }
        onClick={calcFactorial}
      >Oblicz</button>
      <p className="app__error">{ error }</p>
      <FactorialHistory />
    </div>
  );
}

export default Factorial;

// https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript
// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
// https://www.educative.io/answers/how-to-find-the-factorial-of-a-number-in-javascript
// https://redux-toolkit.js.org/tutorials/typescript