interface Owner {
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
}

export interface Commit {
  sha: string;
  author: Owner;
  commit: {
    message: string;
  };
  html_url: string;
}

export interface githubState {
  projects: Project[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
}
