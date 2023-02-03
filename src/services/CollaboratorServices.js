import createHttp from './BaseServices';

const http = createHttp(true);

export const getProjectCollaborators = (id) => http.get(`/collaborations/project/${id}`).then((res) => res);
export const collaborationUser = (body) => http.post('/collaborations/add', body).then((res) => res);
