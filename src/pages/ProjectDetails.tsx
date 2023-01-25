import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
import type { ProjectPayload } from '../types/github';
import { getProjectStatus, fetchProject, fetchCommits, getProject } from '../features/githubSlice';
import { checkIfLoginValid, checkIfRepoNameValid } from '../utilities/helpers';
import Project from '../components/Project';
import AnimatedPage from '../components/AnimatedPage';


const ProjectDetails = () => {
  const [isProjectExist, setIsProjectExist] = useState<'yes' | 'no'>();

  const projectStatus = useSelector(getProjectStatus);
  const project = useSelector(getProject);
  const dispatch = useDispatch<AppDispatch>();

  const [searchParams] = useSearchParams();
  const login = searchParams.get('login');
  const repo = searchParams.get('repo');
  
  useEffect(() => {
    const isPramsNotValid = !login || !repo || !checkIfLoginValid(login) || !checkIfRepoNameValid(repo);
    if (isPramsNotValid) return setIsProjectExist('no');
    const payload: ProjectPayload = { login, repo };
    
    dispatch(fetchProject(payload));

    if (projectStatus === 'failed') return
    dispatch(fetchCommits(payload));
  // eslint-disable-next-line
  }, []);

  if (isProjectExist === 'no' || projectStatus === 'failed_404') return <h1>Wprowadzono niepoprawne dane</h1>;
  if (projectStatus === 'failed_403') return <h1>Przekroczono limit wyszukiwań, spróbuj ponownie później</h1>;
  if (projectStatus === 'failed') return <h1>Coś poszło nie tak, spróbuj ponownie później</h1>;
  if (projectStatus === 'idle' || !project.length) return <h1>Wyszukiwanie danych...</h1>;

  return (
    <AnimatedPage>
      <h1 className="app__header">Szczegóły projektu</h1>
      <Project />
    </AnimatedPage>
  );
}

export default ProjectDetails;
