import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import githubApi from '../services/github';
import type { Project, githubState } from '../types/github';

const initialState: githubState = {
  projects: [],
  status: 'idle'
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
        state.status = 'idle';
        state.projects = action.payload;
      })
      .addCase(fetchProjectsWithCommits.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const getGithubProjects = (state: RootState) => state.github.projects;
export const getStatus = (state: RootState) => state.github.status;

export default githubSlice.reducer;
