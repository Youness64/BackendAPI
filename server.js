const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRouter = require('./route/api.route')




dotenv.config();
const  port = process.env.PORT;
console.log('Your port is ',port,'')




const server = express();
server.use(express.json());
server.set('json spaces', 2);



server.use('/', userRouter);


server.listen(3000);






module.exports = {server};



