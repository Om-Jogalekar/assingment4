const rocketController = require('../controllers/rocketControllers');
const express = require('express')
const route = express.Router();

route.post("/",rocketController.addAllRockets);
route.post("/:rocketId",rocketController.addRocketsById);
route.get("/all",rocketController.getAllRockets);
route.get("/:uId" , rocketController.getRocketsById);

module.exports = route;