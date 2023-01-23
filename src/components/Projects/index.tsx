import type { Project } from '../../types/github';
import ProjectsCard from './ProjectsCard';
import '../../styles/projects.scss';

const Projects = (props: { projects: Project[] }) => {
  return (
    <div className="projects">
      <p className="projects__title">
        Lista projektów dla
        <a
          href={props.projects[0].owner.html_url}
          target="_blank"
          rel="noopener noreferrer"
        > {props.projects[0].owner.login}</a>
        :
      </p>
      { props.projects.map(project => {
        return <ProjectsCard project={project} key={project.id} />
      })}
    </div>
  );
}

export default Projects;
