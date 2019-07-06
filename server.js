var express = require('express')
    , cors = require('cors')
    , app = express();

const nodeTest = require('./build/Release/nodetest.node');
console.log('addon', nodeTest);
//app.user(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
    //    'http://www.myproductionurl.com'
];
var corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}
//here is the magic
app.use(cors(corsOptions));

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const classInstance = new nodeTest.UtilityWrapper();
// console.log('Factorial: ', classInstance.factorial(5));
// module.exports = nodeTest;

app.post('/', (req, res, next) => {
    num = req.body.num.value;

    if (isNaN(num) || ('' + num).trim() === '') {
        return res.send({ 'error': 1, 'message': 'required input as number'+num });
    }
    return res.send({ 'error': 0, 'result': classInstance.factorial(parseInt(num)) });
});

app.listen(3000)