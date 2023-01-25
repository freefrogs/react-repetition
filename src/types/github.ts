export interface Owner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Project {
  id: number;
  owner: Owner;
  name: string;
  html_url: string;
  description?: string;
  commits?: Commit[];
  language?: string;
}

export interface Commit {
  sha: string;
  author: Owner;
  commit: {
    message: string;
  };
  html_url: string;
  committer: Owner;
}

type Status = 'idle' | 'loading' | 'failed' | 'failed_403' | 'failed_404' | 'succeeded';

export interface githubState {
  projects: Project[];
  status: Status;
  project: Project[];
  projectStatus: Status;
  commitsStatus: Status;
}

export interface ProjectPayload {
  login: string;
  repo: string;
}
