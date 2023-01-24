import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import githubApi from '../services/github';
import type { Project, githubState, ProjectPayload, Commit } from '../types/github';

const initialState: githubState = {
  projects: [],
  status: 'idle',
  project: [],
  projectStatus: 'idle',
  commitsStatus: 'idle'
}

export const fetchProjectsWithCommits = createAsyncThunk('users/Projects', async (login: string) => {
  const res = await githubApi.get(`/users/${login}/repos?sort=updated&per_page=5`);
  const projects = await Promise.all(res.data.map(async (project: Project) => {
    const res = await githubApi.get(`/repos/${login}/${project.name}/commits?sort=updated&per_page=5`);
    project.commits = res.data;
    return project
  }));
  return projects
});

export const fetchProject = createAsyncThunk('users/Project', async (payload: ProjectPayload) => {
  const { login, repo } = payload;
  const res = await githubApi.get(`/repos/${ login }/${ repo }`);
  return res.data
});

export const fetchCommits = createAsyncThunk('users/Commits', async (payload: ProjectPayload) => {
  const { login, repo } = payload;
  const res = await githubApi.get(`/repos/${ login }/${ repo }/commits?sort=updated&per_page=30`);
  return res.data
});

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsWithCommits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjectsWithCommits.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjectsWithCommits.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchProject.pending, (state) => {
        state.projectStatus = 'loading';
      })
      .addCase(fetchProject.fulfilled, (state, action: PayloadAction<Project>) => {
        state.project = [action.payload];
        state.projectStatus = 'succeeded';
      })
      .addCase(fetchProject.rejected, (state) => {
        state.projectStatus = 'failed';
      })
      .addCase(fetchCommits.pending, (state) => {
        state.commitsStatus = 'loading';
      })
      .addCase(fetchCommits.fulfilled, (state, action: PayloadAction<Commit[]>) => {
        const newProject = [...state.project];
        newProject[0].commits = action.payload;
        state.project = newProject;
        state.commitsStatus = 'succeeded';
      })
      .addCase(fetchCommits.rejected, (state) => {
        state.commitsStatus = 'failed';
      });
  }
});

export const getGithubProjects = (state: RootState) => state.github.projects;
export const getProject = (state: RootState) => state.github.project;
export const getStatus = (state: RootState) => state.github.status;
export const getProjectStatus = (state: RootState) => state.github.projectStatus;
export const getCommitsStatus = (state: RootState) => state.github.commitsStatus;

export default githubSlice.reducer;
