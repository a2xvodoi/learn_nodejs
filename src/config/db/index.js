const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/w_edu_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
        });
        console.log('connect successfuly!');
    } catch (error) {
        console.log('connect falure!');
    }
}

module.exports = { connect};
