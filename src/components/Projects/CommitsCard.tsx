import type { Commit } from '../../types/github';

const CommitCard = (props: { commit: Commit }) => {
  return (
    <p className="projects__commit">
      <a
          href={props.commit.html_url}
          target="_blank"
          rel="noopener noreferrer"
      >{props.commit.commit.message}</a>
    </p>
  );
}

export default CommitCard;
