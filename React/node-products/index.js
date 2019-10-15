const express = require('express');
const app = express();
const routers = require('./routers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/onlinestore', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/api',routers);
mongoose.set('useFindAndModify', false);
app.use(function(err, req, res, next){
    res.status(422).send({err : err.message});
});

// app.get('/', function(req, res){
//     console.log("This is homepage");
//     var data1 = ({
//         Nama: "Rakyan Satrya Adhikara",
//         umur: "20",
//         username: "rkyn",
//         email: "rkyn@gmail.com"
//     });
//     var data2 = ({
//         Nama: "Udin Saptono",
//         umur: "22",
//         username: "mangudin",
//         email: "mangudin@gmail.com"
//     });
//     var totalData = ({
//         data1,
//         data2
//     })
//     res.status(200).send(totalData);
// })
app.listen(process.env.port || 5000, function () {
    console.log("express app now listening request");
})