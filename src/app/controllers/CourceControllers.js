const Cource = require('../models/Cource');

const {toObj} = require('../../util/mongooes');

module.exports.show = function(req,res, next){
    Cource.find({slug : req.params.slug})
        .then(cource =>{
            res.render('cources/show',{
                cource : toObj(cource),
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
    .then(() => res.redirect('/user/stored/cource'))
    .catch(error =>{

    })
}

module.exports.edit = function(req, res, next){
    Cource.findById(req.params.id)
        .then(cource =>{
            res.render('cources/edit',{
                cource : toObj(cource),
            });
        })
        .catch(next);
}

module.exports.update = function(req, res, next){
    Cource.updateOne({_id : req.params.id}, req.body)
    .then(() => res.redirect('/user/stored/cource'))
    .catch(next);
}

module.exports.destroy = function(req, res, next){
    Cource.delete({_id : req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
}
module.exports.restore = function(req, res, next){
    Cource.restore({_id : req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
}

module.exports.handleFormAction = function(req, res, next){
    switch(req.body.action){
        case 'delete':
            Cource.delete({_id : {$in : req.body.courceId}})
            .then(() => res.redirect('back'))
            .catch(next);
            break;
        case 'delete-fouce':
            Cource.deleteMany({_id : {$in : req.body.courceIds}})
            .then(() => res.redirect('back'))
            .catch(next);
            break;
        case 'restore':
            Cource.restore({_id : {$in : req.body.courceIds}})
            .then(() => res.redirect('back'))
            .catch(next);
            break;
        default:
            res.send('<h1 style="color:red">Action not isvalid</h1>');
    }
    
}