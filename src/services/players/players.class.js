const { Service } = require('feathers-nedb');

exports.Players = class Players extends Service {
    create(data, params) {
        // This is the information we want 
        const { userName} = data;
       
        // The complete 
        const playerData = {
            userName

        };
        // Call the original `create` method with existing `params` and new data
        return super.create(playerData, params);
    }
};
