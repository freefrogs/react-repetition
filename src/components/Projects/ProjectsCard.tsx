import type { Project } from '../../types/github';
import '../../styles/projects.scss';
import CommitsCard from './CommitsCard';

const ProjectCard = (props: { project: Project }) => {
  
  return (
    <div className="projects__card">
      <div className="projects__grid">
        <a
          href={props.project.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >{props.project.name}</a>
        <span className="projects__grid--last">
          <button
            className="app__btn"
          >Zobacz szczegóły</button>
        </span>
      </div>
      <p>Ostatnie commity:</p>
      <div className="app__margin">
        { props.project.commits?.length ? props.project.commits.map(commit => <CommitsCard commit={ commit } key={commit.sha} />) : 'brak danych' }
      </div>
    </div>
  );
}

export default ProjectCard;
