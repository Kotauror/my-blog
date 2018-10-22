const express = require('express');
const Like = require('./models/like.js');
const LikesController = require('./controllers/likes.js');
const app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

// var jquery = require('jquery');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/images'));


// app.use(express.static(__dirname + "/public"));
app.use("/style",express.static(__dirname + "/style")); // put jquery (and other static things like css and images) to public and load it
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))

require('./routes/index.js')(app);
require('./routes/varia-articles.js')(app);
require('./routes/tech-articles.js')(app);
app.get('*', (req, res) => res.status(404).send({
  message: 'Not found.',
}));

module.exports = app;
