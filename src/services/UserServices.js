import createHttp from './BaseServices';

const http = createHttp(true);

export const getCurrentUser = () => http.get('/users/me');

export const createUser = (body) =>
  http.post('/register', body).then((res) => res);
export const getUserDetail = (id) =>
  http.get(`/users/${id}`).then((res) => res);
