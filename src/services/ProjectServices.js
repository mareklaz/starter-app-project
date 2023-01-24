import createHttp from './BaseServices';

const http = createHttp(true);

export const createProject = (body) => http.post('/projects', body).then((res) => res);
export const getAllProjects = () => http.get('/projects').then((res) => res);
