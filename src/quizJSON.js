export default {
  name: 'What Do You Know About This?',
  questions: [
    {
      id: 0,
      text: "Grand Central Terminal, Park Avenue, New York is the world's",
      choices: [
        { id: 0, text: 'largest railway station', questionId: 0 },
        { id: 1, text: 'highest railway station', questionId: 0 },
        { id: 2, text: 'longest railway station', questionId: 0 },
        { id: 3, text: 'None of the above', questionId: 0 },
      ],
    },
    {
      id: 1,
      text: 'Entomology is the science that studies',
      choices: [
        { id: 0, text: 'Behavior of human beings', questionId: 1 },
        { id: 1, text: 'Insects', questionId: 1 },
        {
          id: 2,
          text: 'The origin and history of technical and scientific terms',
          questionId: 1,
        },
        { id: 3, text: 'The formation of rocks', questionId: 1 },
        { id: 4, text: 'None of the above', questionId: 1 },
      ],
    },
    {
      id: 2,
      text: 'Friction can be reduced by changing from',
      choices: [
        { id: 0, text: 'sliding to rollings', questionId: 2 },
        { id: 1, text: 'rolling to sliding', questionId: 2 },
        { id: 2, text: 'potential energy to kinetic energy', questionId: 2 },
        { id: 3, text: 'dynamic to static', questionId: 2 },
      ],
    },
    {
      id: 3,
      text:
        'For seeing objects at the surface of water from a submarine under water, the instrument used is',
      choices: [
        { id: 0, text: 'kaleidoscope', questionId: 3 },
        { id: 1, text: 'spectroscope', questionId: 3 },
        { id: 2, text: 'periscope', questionId: 3 },
        { id: 3, text: 'telescope', questionId: 3 },
      ],
    },
    {
      id: 4,
      text: 'Galileo was an Italian astronomer who',
      choices: [
        { id: 0, text: 'developed the telescope', questionId: 4 },
        { id: 1, text: 'discovered four satellites of Jupiter', questionId: 4 },
        {
          id: 2,
          text:
            'discovered that the movement of pendulum produces a regular time measurement',
          questionId: 4,
        },
        { id: 3, text: 'All of the above', questionId: 4 },
      ],
    },
  ],
};
