const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Cource = new Schema({
    name: String,
    decripsions: String,
    image: String,
    slug: { type: String, slug: 'name', unique: true },
  },{
    timestamps: true
  }
  );

Cource.plugin(mongoose_delete, { 
    deletedAt : true,
    overrideMethods: true, });

module.exports = mongoose.model('Cource',Cource);