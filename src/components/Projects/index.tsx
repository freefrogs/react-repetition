import type { Project } from '../../types/github';
import ProjectsCard from './ProjectsCard';
import '../../styles/projects.scss';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="projects">
      <p className="projects__title">
        { projects.length ? (
          <>
            Lista projektów dla
            { <a
              href={ projects[0].owner.html_url }
              target="_blank"
              rel="noopener noreferrer"
            > { projects[0].owner.login }</a> }
            :
          </>
        ) : 'Ten login nie ma jeszcze projektów' }
      </p>
      { projects.map(project => {
        return <ProjectsCard project={ project } key={ project.id } />
      }) }
    </div>
  );
}

export default Projects;
