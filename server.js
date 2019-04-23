
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*Imports routes
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

const user = require('./modules/users/routes/user.route'); // Imports routes for the user

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);


app.listen(8000, () => {
  // eslint-disable-next-line 
  console.log('Server started!');
});
