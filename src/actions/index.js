export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export function fetchProjects(data) {
  console.log('fetchProjects data', data);

  return {
    type: FETCH_PROJECTS,
    payload: data
  }
}
