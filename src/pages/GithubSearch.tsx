import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store'
import Projects from "../components/Projects";
import { getStatus, getGithubProjects, fetchProjectsWithCommits } from '../features/githubSlice';

const GithubSearch = () => {
  const [error, setError] = useState<string>();
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(getGithubProjects);
  const status = useSelector(getStatus);

  const checkInputValue = (val?: string) => {
    if (!val?.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
      setError('Wprowadź poprawny login github');
    } else {
      setError('');
    }
  }

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    checkInputValue(value)
  }, [value]);

  const getProjects = () => {
    if (value?.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
      dispatch(fetchProjectsWithCommits(value));
    }
  }

  return (
    <div className="github">
      <h2 className="app__header">Wyszukaj projekty wybranego autora</h2>
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
      { status === 'loading' && <p className="app__paragraph">Trwa wyszukiwanie projektów...</p> }
      { status === 'failed' && <p className="app__error">Nastąpił błąd podczas wyszukiwania...</p> }
      { status === 'idle' && !!projects.length && <Projects projects={ projects } /> }
    </div>
  );
}

export default GithubSearch;

// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories
// const url = `https://api.github.com/users/${freefrogs}/repos?sort=updated&per_page=5`;
// https://api.github.com/repos/freefrogs/env1-test/commits?sort=updated&per_page=5
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-commits

// https://github.com/shinnn/github-username-regex/blob/master/index.js github login verification
// const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
