import { useSelector, useDispatch } from 'react-redux';
import { clearHistory, getFactorialHistory } from '../features/factorialSlice';

const FactorialHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector(getFactorialHistory);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  }

  return (
    <div className="factorial-history">
      {!!history.length && (
        <>
          <p className="app__paragraph">Twoje wyniki:</p>
          { history.map((el, index) => <p className="app__paragraph" key={index}>{el}</p>) }
          <button
            className="app__btn"
            onClick={ handleClearHistory }
          >Wyczyść historię wyników</button>
        </>
      )}
    </div>
  );
}

export default FactorialHistory;
