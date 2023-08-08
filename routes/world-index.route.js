const express=require('express');
const route=express.Router();

const worldIndexController =require('./../controller/world-index-data.controller')


route.get('/get-world-index' , worldIndexController.GetWorldIndexData);
route.get('/get-world-index/:countryCode/:seriesId', worldIndexController.FilterWorldIndexData)

module.exports=route