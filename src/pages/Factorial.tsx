import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateHistory, updateFactorialArr, getFactorialArr } from '../features/factorialSlice';
import FactorialHistory from "../components/FactorialHistory";
import AnimatedPage from '../components/AnimatedPage';

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
    if (newArr.length !== factorialArr.length) dispatch(updateFactorialArr(newArr));
    return newArr[n]
  }
  
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    checkInputValue(e.target.value)
    setValue(e.target.value);
  }

  useEffect(() => {
    if (!!result) dispatch(updateHistory(result));
  // eslint-disable-next-line
  }, [result]);

  const calcFactorial = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!value || !/^\d+$/.test(value) || Number(value) <= 0) return
    setResult(`${value}! = ${factorial(Number(value))}`);
    setValue('');
  }

  return (
    <AnimatedPage>
      <div className="factorial">
        <h1 className="app__header">Oblicz silnię</h1>
        <form>
          <label>
            <span>Wprowadź liczbę naturalną: </span>
            <input
              type="text"
              value={ value }
              className="app__input"
              onChange={ handleInputChange }
            />
          </label>
          <button
            className={ (`app__btn ${!!error ? 'app__btn--disabled' : ''}`).trim() }
            disabled={ !!error }
            onClick={ calcFactorial }
          >Oblicz</button>
          <p className="app__error">{ error }</p>
        </form>
        <FactorialHistory />
      </div>
    </AnimatedPage>
  );
}

export default Factorial;
