import createHttp from './BaseServices';

const http = createHttp(true);

export const loginUser = (body) => http.post('/login', body).then((res) => res);
export const registerUser = (body) => http.post('/register', body).then((res) => res);
