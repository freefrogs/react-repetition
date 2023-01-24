import { Link } from 'react-router-dom';
import type { Project } from '../../types/github';
import '../../styles/projects.scss';
import CommitsCard from './CommitsCard';

interface ProjectProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { html_url, name, commits, owner } = project;
  
  return (
    <div className="projects__card">
      <div className="projects__grid">
        <a
          href={ html_url }
          target="_blank"
          rel="noopener noreferrer"
        >{ name }</a>
        <Link
          className="app__btn"
          to={ `/project?login=${ owner.login }&repo=${ name }` }
        >Zobacz szczegóły</Link>
      </div>
      <p>Ostatnie commity:</p>
      <div className="app__margin">
        { commits?.length ? commits.map(commit => <CommitsCard commit={ commit } key={ commit.sha } />) : 'brak danych' }
      </div>
    </div>
  );
}

export default ProjectCard;
