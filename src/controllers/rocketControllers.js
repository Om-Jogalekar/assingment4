const rocketsServices = require('../service/rocketsServices');
const Rockets = require("../model/roecketsModel");
const axios = require('axios');
const config = require('../common/config');

const url = config.url;


const fetchAllReockets = async(url)=>{
    const result = await axios.get(url);
    const responce = result.data;
    return responce;
}

const addAllRockets = async (req,res)=>{
    try { 
          const jsonData = await fetchAllReockets(url);
          for(const element of jsonData){
            const rocket = new Rockets(element);
            const result = await rocketsServices.addRockets(rocket);
          }
        res.status(201).json({ message: "All rockets are added"});
      } catch (error) {
        res.status(500).json({message:error.message});
        throw error;
      }
}

const addRocketsById = async(req,res)=>{
    try {
        const rocketId = req.params.rocketId;
        const responce = await axios.get(`${url}/${rocketId}`);
        const jsonData = responce.data;
        const rocket = new Rockets(jsonData);
        const result = await rocketsServices.addRockets(rocket);
        res.status(200).json({message:"Rocket data added successfully !" ,result : result});
    } catch (error) {
       res.status(500).json({message:error.message});
        throw error;
    }
}

const getAllRockets = async(req,res)=>{
    try{
    const result = await rocketsServices.getAllRockets(req.body);
    res.status(200).json({result});
    }
    catch(error){
    res.status(500).json({message:error.message});
    }
    }

const getRocketsById = async(req,res)=>{
  try {
    const uId = req.params.uId;
    const result = await rocketsServices.getRocketsById(uId);
    res.status(200).json({result});

  } catch (error) {
    res.status(500).json({message : error.message});
  }
}

module.exports = {
    addAllRockets,
    addRocketsById,
    getAllRockets,
    getRocketsById
}