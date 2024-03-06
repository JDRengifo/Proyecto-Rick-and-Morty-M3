const server = require('./app');
const router = require('./routes');
const { conn } = require('./DB_connection');
const { Sequelize } = require('sequelize');
// const express = require('express');
// const server = express();
const PORT = 3001;

server.use('/rickandmorty', router);

conn.sync({ force: false }).then(()=>{
   server.listen(PORT, () => {
      console.log('Servidor está en espera en el puerto: ' + PORT);
  });
});









// // const http = require('http');
// // const getCharById = require("./controllers/getCharById");

// // http.createServer((req, res) => { 
    
// //   res.setHeader("Access-Control-Allow-Origin", "*");

// //   const findId = (url) => {
// //     const spliturl = url.split('/');
// //     return parseInt(spliturl[3])
// //     };
  
// //   if (req.url.includes("/rickandmorty/character/")) {
// //     const id = findId(req.url);
// //     getCharById(res,id)
    
// //   } else {
// //     res.writeHead(404,{'Content-Type':'text/plain'});
// //     res.end('Character Id not found');
// //   }
// // }).listen(3001, 'localhost');


// const http = require("http");
// const getCharById = require('./controllers/getCharById')
// // const data = require("./utils/data")

// http.createServer((req, res)=>{
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const { url } = req;
  
//   if(url.includes("/rickandmorty/character")) {
//     const array = url.split("/");
//     const id = array.pop()
   
//    getCharById(res, +id)
//   }else {
//        res.writeHead(404,{'Content-Type':'text/plain'});
//       res.end('URL no encontrada');
//       }

// }).listen(3001, "localhost");


