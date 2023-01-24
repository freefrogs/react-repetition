import { useSelector } from 'react-redux';
import { getStatus, getGithubProjects } from '../features/githubSlice';
import Projects from "../components/Projects";

const SearchResult = () => {
  const status = useSelector(getStatus);
  const projects = useSelector(getGithubProjects);

  return (
    <div>
      { status === 'loading' && <p className="app__paragraph">Trwa wyszukiwanie projektów...</p> }
      { status === 'failed' && <p className="app__paragraph">Ten login nie istnieje</p> }
      { status === 'succeeded' && <Projects projects={ projects } /> }
    </div>
  )
};

export default SearchResult;
