const express = require('express');
const router = express.Router();
const Heroes = require('./model/Heroes');

router.get('/heroes/', function(req, res) {
    Heroes.find({}).then(function(result){
        res.send(result);
    });
    // res.send('GET heroes');
});
router.get('/heroes/:id', function(req, res) {
    Heroes.findOne({_id: req.params.id}).then(function(result){
        res.send(result);
    });
    // res.send('GET heroes');
});

router.post('/heroes/', function(req, res, next){
    const {nama, rule} = req.body;
    console.log(req.body);
    Heroes.create(req.body).then(function(result){
        res.send(result);
    }).catch(next);
    // res.send({ method: "POST", nama : req.body.nama, peran : req.body.rule });
});

router.put('/heroes/:id', function(req, res){
    Heroes.findOneAndUpdate({_id: req.params.id}, req.body).then(function(result){
        Heroes    
            console.log(result);
            res.send(result);
    });
    // res.send('PUT hero');
});

router.delete('/heroes/:id', function(req, res){
    Heroes.findOneAndDelete({_id: req.params.id}).then(function(result){
        Heroes.findOne({_id: req.body.id}).then(function(hero){
            res.send(hero);
        })
    });
    // res.send('DELETE hero');
});

module.exports = router;