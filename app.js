const express = require('express');
const Like = require('./models/like.js');
const LikesController = require('./controllers/likes.js');
const app = express();
var bodyParser = require('body-parser');
// const { Client } = require('pg');
//
var jquery = require('jquery');
app.set('view engine', 'ejs');

// app.use(express.static(__dirname + "/public"));
app.use("/style",express.static(__dirname + "/style")); // put jquery (and other static things like css and images) to public and load it

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => console.log('Example app listening on port 3000!'))

require('./routes/index.js')(app);
require('./routes/varia-articles.js')(app);
require('./routes/tech-articles.js')(app);
app.get('*', (req, res) => res.status(404).send({
  message: 'Not found.',
}));

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });
//
// client.connect();
//
// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

module.exports = app;
