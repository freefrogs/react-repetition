import type { Project } from '../../types/github';
import '../../styles/project.scss';

interface ProjectProps {
  project: Project;
}

const ProjectInfo = ({ project }: ProjectProps) => {
  const { html_url, name, description, language } = project;
  return (
    <div className="project__info">
      <p className="app__paragraph">
        <strong>Nazwa: </strong>
        <a
          href={ html_url }
          target="_blank"
          rel="noopener noreferrer"
        >{ name }</a>
      </p>
      { !!description && <p className="app__paragraph">{ description }</p> }
      { !!language && (
        <p className="app__paragraph">
          <strong>Główny język: </strong>
          { language }
        </p>
      )}
    </div>
  )
};

export default ProjectInfo;
