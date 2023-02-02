import createHttp from './BaseServices';

const http = createHttp(true);

export const like = (body) => http.post(`/like`, body).then((res) => res);
export const getCurrentUserLikesInProject = (id) => http.get(`/like/${id}`).then((res) => res);
export const getProjectLikes = (id) => http.get(`/projects/like/${id}`).then((res) => res);
