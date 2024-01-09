const cosmosService = require('../cosmosDb/cosmosService');
const config = require('../common/config');


const addRockets = async (rocket)=>{
    rocket.initialize(true,config.rocketdType , "" , "admin");
    const result = await cosmosService.saveDataToContainer(rocket);
    return result;
}

const getAllRockets = async ({ pageNo = 1, pageSize = 10 }) => {
    try {
      const result = await cosmosService.getAllDataFromContainer(
        config.rocketdType,
        pageNo,
        pageSize
      );
      return result.rockets;
    } catch (error) {
      throw error;
    }
  };

const getRocketsById = async(uId)=>{
  const rocket = await cosmosService.getDataByParameter("uId" , uId , config.rocketdType);
  return  rocket; 
}
module.exports = {addRockets,getAllRockets , getRocketsById};