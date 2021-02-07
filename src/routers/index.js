const newsRouter = require('./news');
const siteRouter = require('./site');
const courcesRouter = require('./cource');
const userRouter = require('./user');

function router(app){

    app.use('/news', newsRouter);
    app.use('/cources', courcesRouter);
    app.use('/user', userRouter);
    app.use('/', siteRouter);
    
}
module.exports = router;

