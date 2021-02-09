const Cource = require('../models/Cource');

const {multiToObj} = require('../../util/mongooes');

module.exports.storedCource = function(req,res, next){
    Promise.all([Cource.find({}),Cource.countDocumentsDeleted()])
    .then(([Cources, deletedCount])=>{
        res.render('user/stored-cource',{
            Cources : multiToObj(Cources),
            deletedCount,
        });
    })
    .catch(next);
    // Cource.find({})
    //     .then(Cources =>{
    //         res.render('user/stored-cource',{
    //             Cources : multiToObj(Cources)
    //         });
    //     })
    //     .catch(next);
}
module.exports.trashCource = function(req,res, next){
    Promise.all([Cource.findDeleted({}),Cource.countDocumentsDeleted()])
    .then(([Cources, deletedCount])=>{
        res.render('user/trash-cource',{
            Cources : multiToObj(Cources),
            deletedCount,
        });
    })
    .catch(next);
    // Cource.findDeleted({})
    //     .then(Cources =>{
    //         res.render('user/trash-cource',{
    //             Cources : multiToObj(Cources)
    //         });
    //     })
    //     .catch(next);
}

module.exports.fouceDelete = function(req, res, next){
    Cource.deleteOne({_id : req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
}
