
var cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

/*Imports routes
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

const user = require('./modules/users/routes/user.route'); // Imports routes for the user
const product = require('./modules/product/routes/product.route'); // Imports routes for the user

/*Connect to database
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/freelancer_engine';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
// eslint-disable-next-line 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/*Body Parser
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);
app.use('/product', product);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('public/build'));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
  });
}



app.listen(process.env.PORT || 8000, () => {
  // eslint-disable-next-line 
  console.log('Server started!');
});
