// eslint-disable-next-line no-unused-vars

const games = require('./games/games.service.js');
const players = require('./players/players.service.js');
module.exports = function (app) {
  app.configure(games);
  app.configure(players);
};
