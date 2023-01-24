import type { Commit } from '../../types/github';

interface CommitProps {
  commit: Commit;
}

const CommitCard = ({ commit }: CommitProps) => {
  const { commit: commitData, html_url } = commit;

  return (
    <p className="projects__commit">
      <a
          href={ html_url }
          target="_blank"
          rel="noopener noreferrer"
      >{ commitData.message }</a>
    </p>
  );
}

export default CommitCard;
