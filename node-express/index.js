const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port  ='3000';
const bodyParser = require('body-parser');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json()); // by using this, req.body will be having all the information
app.use(express.static(__dirname+'/public'));

app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional end points for get,put,post and res,req will be passed to tat method
});

app.get('/dishes',(req,res,next)=>{
  res.end('will send all the dishes to you!');
});

// In this we are extracting the name and desc and sending it back to user.
app.post('/dishes',(req,res,next)=>{
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes', (req, res, next) => {
  res.end('Deleting all dishes');
});

//Here parameter is extracted using req.params.dishID
app.get('/dishes/:dishId', (req,res,next) => {
  res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('Deleting dish: ' + req.params.dishId);
});

app.use((req, res,next)=> {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<html><body><h1>This is an express server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}`)
});