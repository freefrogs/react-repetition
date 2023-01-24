import type { Commit } from '../../types/github';
import '../../styles/project.scss';

interface CommitProps {
  commit: Commit;
}

const ProjectCommitCard = ({ commit }: CommitProps) => {
  const { commit: commitData, html_url, committer } = commit;

  return (
    <div className="app__commit project-commit__card">
      <a
        href={ html_url }
        target="_blank"
        rel="noopener noreferrer"
      >{ commitData.message }</a>
      { committer && (
        <p className="project__committer">
          committer:
          <img
            className="project__avatar project__avatar--small"
            src={ committer.avatar_url }
            alt={ `${ committer.login } avatar` }
          />
          <a
            href={ committer.html_url }
            target="_blank"
            rel="noopener noreferrer"
          >{ committer.login }</a>
        </p>
      )}
    </div>
  )
}

export default ProjectCommitCard;
