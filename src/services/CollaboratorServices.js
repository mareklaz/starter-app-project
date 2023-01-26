import createHttp from './BaseServices';

const http = createHttp(true);

export const getProjectCollaborators = (id) =>
  http.get(`/collaborations/project/${id}`).then((res) => res);
