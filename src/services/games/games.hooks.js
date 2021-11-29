

const processGame = require('../../hooks/process-game');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processGame()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
