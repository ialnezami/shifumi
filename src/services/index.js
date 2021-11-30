// eslint-disable-next-line no-unused-vars

const games = require('./games/games.service.js');
module.exports = function (app) {
  app.configure(games);
};
