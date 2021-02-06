const Cource = require('../models/Cource');

const {toObj} = require('../../util/mongooes');

module.exports.show = function(req,res, next){
    Cource.findOne({slug : req.params.slug})
        .then(cource =>{
            res.render('cources/show',{
                cource : toObj(cource)
            });
        })
        .catch(next);
}

module.exports.create = function(req, res, next){
    res.render('cources/create');
}

module.exports.postCreate = function(req, res, next){
    const formData = req.body;
    const cource = new Cource(formData);
    cource.save()
    .then(() => res.redirect('/'))
    .catch(error =>{

    })
}
