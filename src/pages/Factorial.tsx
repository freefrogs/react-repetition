import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addResult, updateFactorialArr, getFactorialArr } from '../features/factorialSlice';
import FactorialHistory from "../components/FactorialHistory";

const Factorial = () => {
  const [error, setError] = useState<string>();
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const dispatch = useDispatch();

  const checkInputValue = (val?: string) => {
    const isNotNaturalNumber = !val || !/^\d+$/.test(val) || Number(val) <= 0;
    isNotNaturalNumber ? setError('Wprowadź liczbę całkowitą większą od zera') : setError('');
  }

  const factorialArr = useSelector(getFactorialArr);
  const factorial = (n:number) => {
    const newArr = [...factorialArr];
    for (let i = newArr.length; i <= n; i++) {
      newArr.push(i * newArr[i-1]);
    }
    dispatch(updateFactorialArr(newArr));
    return newArr[n]
  }
  
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    checkInputValue(e.target.value)
    setValue(e.target.value);
  }

  useEffect(() => {
    if (!!result) dispatch(addResult(result));
  // eslint-disable-next-line
  }, [result]);

  const calcFactorial = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!value || !/^\d+$/.test(value) || Number(value) <= 0) return
    setResult(`${value}! = ${factorial(Number(value))}`);
  }

  return (
    <div className="factorial">
      <form>
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
      </form>
      <FactorialHistory />
    </div>
  );
}

export default Factorial;
