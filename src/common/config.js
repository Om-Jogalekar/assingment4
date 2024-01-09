require('dotenv').config();

module.exports = {
    cosmosDb: {
      endpoint: process.env.ENDPOINT,
      key: process.env.KEY,
      dbName: process.env.DATABASEID,
      containerName: process.env.CONTAINERID,
      
    },

    rocketdType : "rockets" ,
    url :"https://api.spacexdata.com/v3/rockets"
  };