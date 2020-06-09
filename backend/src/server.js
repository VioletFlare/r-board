const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const Posts = require('./posts');
const fs = require('fs');

const API_PORT = 3001;
const allowedOrigins = ["localhost"];
const app = express();

const router = express.Router();

app.use(helmet());

app.use(cors({
  origin: allowedOrigins
}));

// this is our MongoDB database
const dbRoute = 'mongodb://localhost:27017/r-board';

// connects our back end code with the database
mongoose.connect(dbRoute, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.message = message;
  data.id = id;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post('/createPost', (req, res) => {
  const post = new Post(),
    isTextWithinCharacterLimit = req.body.text.length > 0 && req.body.text.length <= 8000;
    isImageValid = true;
    isPostValid = isTextWithinCharacterLimit && isImageValid;

  let resultJson;

  if (isPostValid) {
    post.text = req.body.text;
    post.img = ["nonexistent/image.png"];
    post.save(
      err => resultJson = err ? {success: false, error: err} : { success: true } 
    );
  } else {
    resultJson = {
      success: false,
      error: 'INVALID INPUTS',
    };
  }

  return res.json(resultJson);
});

router.get('/getPosts', (req, res) => {
  Posts.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get('/getBannerUrl', async (req, res) => {
  const bannersPath = "./../client/public/banner";

  const files = await fs.promises.readdir(bannersPath);

  const numberOfBanners = files.length; 
    randomBannerNumber = Math.floor(Math.random() * numberOfBanners),
    response = res.json({ url: `banner/${randomBannerNumber}.png` });

  return response; 
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));