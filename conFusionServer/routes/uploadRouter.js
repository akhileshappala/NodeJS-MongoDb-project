const express = require('express');
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');
var multer = require('multer');
const cors = require('./cors');


var storage = multer.diskStorage(
{
    destination: (req, file, cb) => { // destination is one of the option
      cb(null, 'public/images');
  },
  
  filename: (req, file, cb) => { // filename is another option
      cb(null, file.originalname) // cb--> call back function , originalname --> gives the name of the file which is there as uploaded
  }//if no originalname multer gives some random name
}
  
);

const imageFileFilter = (req, file, cb) => {
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('You can upload only image files!'), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFileFilter}); // giving the storage and file filter functions 

const uploadRouter = express.Router();


uploadRouter.use(bodyParser.json());

uploadRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported on /imageUpload');
})
.post(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, upload.single('imageFile'), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.file);
})
.put(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /imageUpload');
})
.delete(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /imageUpload');
});
module.exports = uploadRouter;
