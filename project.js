const express = require('express');
const app=express();
const cors=require('cors');

const bigMacIndexRoute=require('./routes/big-mac-index.route')
const worldIndexRoute=require('./routes/world-index.route')
require('dotenv').config()


app.use(cors());
app.use('/wi' , worldIndexRoute)
app.use('/bmi' , bigMacIndexRoute)

app.listen(process.env._PORT , process.env._LH , ()=>{
    console.log(`listening live on port ${process.env._PORT}`)
})