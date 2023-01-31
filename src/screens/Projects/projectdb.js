export const projects = [
  {
    id: '1',
    name: 'Proyecto 1',
    type: 'Frontend',
    user: 'nahumjaime',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores eius magni harum fugiat voluptatibus possimus illum eaque ex tenetur voluptatem qui corporis laboriosam veniam omnis officia, cum hic sed!',
    dateStart: '24/01/2025',
    dateEnd: '06/02/2025',
    status: 'Pendiente',
  },
  {
    id: '2',
    name: 'Proyecto 2',
    type: 'Backend',
    user: 'mareklaz',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores eius magni harum fugiat voluptatibus possimus illum eaque ex tenetur voluptatem qui corporis laboriosam veniam omnis officia, cum hic sed!',
    dateStart: '24/01/2025',
    dateEnd: '31/01/2025',
    status: 'En curso',
    userId: [
      {
        id: '1',
        name: 'mareklaz',
        email: 'marek@mail.com',
        profile: 'Frontend',
        description: 'Soy programador Frontend',
        skills: ['HTML', 'React', 'JavaScript'],
        githubLink: 'https://github.com/mareklaz',
        linkedinLink: 'https://www.linkedin.com/in/nahumjaimesanchez/',
      },
      {
        id: '2',
        name: 'nahumjaime',
        email: 'nahum@mail.com',
        profile: 'Backend',
        description: 'Soy programador Backend',
        skills: ['Express', 'NodeJS', 'JavaScript'],
        githubLink: 'https://github.com/nahumjimi',
        linkedinLink: 'https://www.linkedin.com/in/marek-laz/',
      },
    ],
  },
];

export const startes = [
  {
    id: '1',
    name: 'mareklaz',
    email: 'marek@mail.com',
    profile: 'Frontend',
    description: 'Soy programador Frontend',
    skills: ['HTML', 'React', 'JavaScript'],
    githubLink: 'https://github.com/nahumjimi',
    linkedinLink: 'https://www.linkedin.com/in/nahumjaimesanchez/',
  },
  {
    id: '2',
    name: 'nahumjaime',
    email: 'nahum@mail.com',
    profile: 'Backend',
    description: 'Soy programador Backend',
    skills: ['Express', 'NodeJS', 'JavaScript'],
    githubLink: 'https://github.com/mareklaz',
    linkedinLink: 'https://www.linkedin.com/in/marek-laz/',
  },
];
