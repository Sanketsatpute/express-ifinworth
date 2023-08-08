const express=require('express');
const route=express.Router();

const bigMacController=require('./../controller/big-mac-index.controller')


route.get('/get-big-mac-index' , bigMacController.GetBigMacIndex);
route.get('/get-big-mac-index/:date', bigMacController.FilterBigMacIndexByDate)

module.exports=route