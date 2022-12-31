import createHttp from './BaseServices';

const http = createHttp(true);

export const createProject = (body) => {
  console.log(body);
  http.post('/projects', body).then((res) => res);
};
