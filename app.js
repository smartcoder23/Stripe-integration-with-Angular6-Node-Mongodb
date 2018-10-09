var express = require('express')
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const router = express.Router();
var mongoose = require('mongoose');

var api = require('./routes/api');
console.log(express);
console.log(mongoose);
mongoose.connect('mongodb://localhost:27017/stripepayment');
app.use(cors());
const port = 3000;
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use('/api',api)


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});
