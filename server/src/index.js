const express = require('express');
const router = require('./routes')
const server = express();

const PORT = 3001;

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());
server.use('/rickandmorty', router);






server.listen(PORT, () => {
   console.log('Servidor está en espera en el puerto: ' + PORT);
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


