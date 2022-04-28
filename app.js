const express = require("express");
const app = express();
const cors = require('cors');
const { default: mongoose } = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import routes
const postRoutes = require('./routes/posts');

//everytime we have to postthe postRoutes will worked (1)
app.use('/post', postRoutes);

app.get('/', (req,res) => {
    res.send('get worked');
});

app.get('/post', (req,res) => {
    res.send('post worked');
});

//DB connection
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},   () => 

console.log('connected to db')
); 


//Listning to server
app.listen(3000); 
