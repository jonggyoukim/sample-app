const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 8000;

var _host = process.env.MYSQL_SERVICE_HOST ? process.env.MYSQL_SERVICE_HOST : 'localhost';
var _user = process.env.MYSQL_SERVICE_USER ? process.env.MYSQL_SERVICE_USER : 'test';
var _password = process.env.MYSQL_SERVICE_PASSWORD ? process.env.MYSQL_SERVICE_PASSWORD : 'Welcome1';
var _database = process.env.MYSQL_SERVICE_DATABASE ? process.env.MYSQL_SERVICE_DATABASE : 'sample';

const db = mysql.createConnection ({
    host: _host,
    user: _user,
    password: _password,
    database: _database
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

app.set('port', process.env.port || port); 
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(fileUpload()); 


app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

