import { useSelector } from 'react-redux';
import { getProject, getCommitsStatus } from '../../features/githubSlice';
import OwnerInfo from './OwnerInfo';
import ProjectInfo from './ProjectInfo';
import ProjectCommitCard from './ProjectCommitCard';

const Project = () => {
  const project = useSelector(getProject);
  const commitsStatus = useSelector(getCommitsStatus);
  const isCommitsVisible = commitsStatus === 'succeeded' && project[0].commits;
  
  return (
    <div className='project'>
      <OwnerInfo owner={ project[0].owner } />
      <ProjectInfo project={ project[0] } />
      { isCommitsVisible && (
        <>
          <p className="app__paragraph">Ostatnio dodane commity ({ project[0].commits?.length }):</p>
          { project[0].commits?.map(commit => <ProjectCommitCard commit={ commit } key={ commit.sha } />) }
        </>
      )}
    </div>
  )
}

export default Project;
