import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
import { fetchProjectsWithCommits } from '../features/githubSlice';
import { checkIfLoginValid } from '../utilities/helpers';
import SearchResult from "../components/SearchResult";
import AnimatedPage from '../components/AnimatedPage';

const GithubSearch = () => {
  const [error, setError] = useState<string>();
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const checkInputValue = (val?: string) => !checkIfLoginValid(val) ? setError('Wprowadź poprawny login github') : setError('');

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    checkInputValue(e.target.value);
  }

  const getProjects = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (checkIfLoginValid(value)) dispatch(fetchProjectsWithCommits(value));
  }

  return (
    <AnimatedPage>
      <div className="github">
        <h1 className="app__header">Wyszukaj projekty wybranego autora</h1>
        <form>
          <label>
            <span>Wpisz github login: </span>
            <input
              type="text"
              value={value}
              className="app__input"
              onChange={ handleInputChange }
            />
          </label>
          <button
            className={(`app__btn ${ !!error ? 'app__btn--disabled' : '' }`).trim()}
            disabled={ !!error }
            onClick={ getProjects }
          >Wyszukaj</button>
          <p className="app__error">{ error }</p>
          <SearchResult />
        </form>
      </div>
    </AnimatedPage>
  );
}

export default GithubSearch;
