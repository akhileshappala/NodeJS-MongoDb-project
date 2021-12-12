const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port  ='3000';
const bodyParser = require('body-parser');
const app = express();

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

app.use(morgan('dev'));
app.use(bodyParser.json()); // by using this, req.body will be having all the information
app.use(express.static(__dirname+'/public'));

app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);



app.use((req, res,next)=> {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<html><body><h1>This is an express server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}`)
});