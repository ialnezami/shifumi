// eslint-disable-next-line no-unused-vars
const socketio = require('@feathersjs/socketio');

/**
 * Sockets are defined here
 */
module.exports = socketio(function(io) {

    /**
     * Called when user begin socket connection
     */
    io.on('connection', function(socket) {
        console.log('a player connected');  

        // When player want access to a game
        socket.on('askAccessGame', (playerId) =>{
            // Find available game
            setTimeout(() => { 
                let game = {
                    gameId:1,
                    playerId:1,
                }
                socket.emit('giveAccessGame',game);
             }, 2000);
        });

        // When player made his choice
        socket.on('choice', (message) => {
            // Find result of other player
            setTimeout(() => { 
                socket.emit('result',"Ciseau");
             }, 2000);
        });

        socket.on('disconnect', () => {    
            console.log('a player disconnected');  
        });
    });
    
    // Registering Socket.io middleware
    io.use(function (socket, next) {
      // Exposing a request property to services and hooks
      socket.feathers.referrer = socket.request.referrer;
      next();
    });
})