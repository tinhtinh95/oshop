const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./db');

const port = process.env.PORT || 3000;

const catRoute = require('./routes/category.route');
mongoose.Promise=global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => console.log('Database is connected'),
    err => console.log('Can not connect to the database', err)
)

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/categories', catRoute);
// app.get('/', (req, res) => {
//     res.send('AHihi');
// })

app.listen(port, function(){
    console.log('Listening on port ', port);
})