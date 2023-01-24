import type { Owner } from '../../types/github';
import '../../styles/project.scss';

interface OwnerProps {
  owner: Owner;
}

const OwnerInfo = ({ owner }: OwnerProps) => {
  const { login, avatar_url, html_url } = owner;

  return (
    <div className="project__owner">
      <p className="project__header">Właściciel projektu: </p>
      <img
        className="project__avatar"
        src={ avatar_url }
        alt={ `${ login } avatar` }
      />
      <a
        href={ html_url }
        target="_blank"
        rel="noopener noreferrer"
      >{ login }</a>
    </div>
  );
}

export default OwnerInfo;
