const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const router = require('./router.js');

const port = 3003;
const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  next();
});
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/api', router);

server.listen(port, ()=>{console.log(`we're in boys`)});