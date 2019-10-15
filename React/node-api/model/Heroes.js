const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroesSchema = new Schema({
    nama : {
        type : String,
        required : true
    },
    rule : {
        type : String,
        required: true
    }
});

const Heroes = mongoose.model('heroes', HeroesSchema);
module.exports = Heroes;