const Cource = require('../models/Cource');

const {multiToObj} = require('../../util/mongooes');

module.exports.index = function(req,res, next){
    Cource.find({})
        .then(Cources =>{
            res.render('home',{
                Cources : multiToObj(Cources)
            });
        })
        .catch(next);
}

module.exports.search = function(req,res){
    res.render('search');
}

