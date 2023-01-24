import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
import { fetchProjectsWithCommits } from '../features/githubSlice';
import SearchResult from "../components/SearchResult";

const GithubSearch = () => {
  const [error, setError] = useState<string>();
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const checkInputValue = (val?: string) => {
    if (!val?.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
      setError('Wprowadź poprawny login github');
    } else {
      setError('');
    }
  }

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    checkInputValue(e.target.value);
  }

  const getProjects = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValidInput = value?.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
    if (isValidInput) dispatch(fetchProjectsWithCommits(value));
  }

  return (
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
          className={(`app__btn ${!!error ? 'app__btn--disabled' : ''}`).trim()}
          disabled={ !!error }
          onClick={ getProjects }
        >Wyszukaj</button>
        <p className="app__error">{ error }</p>
        <SearchResult />
      </form>
    </div>
  );
}

export default GithubSearch;
