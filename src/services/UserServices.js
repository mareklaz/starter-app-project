import createHttp from './BaseServices';

const http = createHttp(true);

export const getCurrentUser = () => http.get('/users/me');
