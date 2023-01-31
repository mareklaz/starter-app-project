import createHttp from './BaseServices';

const http = createHttp(true);

export const login = (body) => http.post('/login', body).then((res) => res);
