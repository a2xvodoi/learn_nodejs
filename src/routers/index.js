const newsRouter = require('./news');
const siteRouter = require('./site');
const courcesRouter = require('./cource');

function router(app){

    app.use('/news', newsRouter);
    app.use('/cources', courcesRouter);
    app.use('/', siteRouter);
    
}
module.exports = router;

