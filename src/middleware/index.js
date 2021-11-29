// eslint-disable-next-line no-unused-vars
const path = require('path');
module.exports = function (app) {
  app.use('/shifumi', (req,res) => {
    res.sendFile(path.join(__dirname+'/pages/shifumi.html'))
  })
};
