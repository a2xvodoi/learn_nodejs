const Cource = require('../models/Cource');

const {multiToObj} = require('../../util/mongooes');

module.exports.storedCource = function(req,res, next){
    Cource.find({})
        .then(Cources =>{
            res.render('user/stored-cource',{
                Cources : multiToObj(Cources)
            });
        })
        .catch(next);
}
