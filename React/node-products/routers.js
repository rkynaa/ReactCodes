const express = require('express');
const router = express.Router();
const Products = require('./model/Products');

router.get('/products/', function(req, res) {
    Products.find({}).then(function(result){
        res.send(result);
    });
    // res.send('GET heroes');
});
router.get('/products/:id', function(req, res) {
    Products.findOne({_id: req.params.id}).then(function(result){
        res.send(result);
    });
    // res.send('GET heroes');
});

router.post('/products/', function(req, res, next){
    const {nama, rule} = req.body;
    console.log(req.body);
    Products.create(req.body).then(function(result){
        res.send(result);
    }).catch(next);
    // res.send({ method: "POST", nama : req.body.nama, peran : req.body.rule });
});

router.put('/products/:id', function(req, res){
    Products.findOneAndUpdate({_id: req.params.id}, req.body).then(function(result){
            console.log(result);
            res.send(result);
    });
    // res.send('PUT hero');
});

router.delete('/products/:id', function(req, res){
    Products.findOneAndDelete({_id: req.params.id}).then(function(result){
        Products.findOne({_id: req.body.id}).then(function(hero){
            res.send(hero);
        })
    });
    // res.send('DELETE hero');
});

module.exports = router;