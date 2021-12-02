const { Service } = require('feathers-nedb');

exports.Games = class Games extends Service {
    async create(data, params) {
        // This is the information we want 
        const { player,completed} = data;
      
        const game = await super.find({query: {completed: false}});
        console.log("searching for a game");
        if(game.total>0){
            const id = game.data[0]._id;
            console.log("found a game");
            return await super.patch(id,{completed: true,p2:{"name":player,choice:null}});
             
        }else{
            console.log("no game found");
            const gameData = { 
            completed:completed,
            p1:
                {"name":player,choice:null},
            p2: 
               {"name":null,choice:null}
                
            };
            return super.create(gameData, params);
        }
       
       
       
      
    }
};
