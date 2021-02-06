const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');

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

module.exports = mongoose.model('Cource',Cource);