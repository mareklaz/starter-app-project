import createHttp from './BaseServices';

const http = createHttp(true);

export const login = (body) => http.post('/login', body).then((res) => res);
export const registerUser = (body) => http.post('/register', body).then((res) => res);

export const validate = (id) => http.get(`/activation/${id}`).then((res) => res);

// export const restorePassword = (body) => http.post(`/auth`, body).then((res) => res);
// export const checkToken = (token) => http.get(`/auth/${token}`).then((res) => res);
// export const newPassword = (body, token) => http.post(`/auth/${token}`, body).then((res) => res);
