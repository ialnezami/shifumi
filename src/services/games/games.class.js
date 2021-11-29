const { Service } = require('feathers-nedb');

exports.Games = class Games extends Service {
    create(data, params) {
        // This is the information we want 
        const { player1,player2} = data;
       
        // The complete 
        const gameData = {
            player1,
            player2,
        };
        // Call the original `create` method with existing `params` and new data
        return super.create(gameData, params);
    }
};
