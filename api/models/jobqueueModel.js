'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var JobSchema = new Schema({
  url: {
      type: String,
      required: true
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'submitted','completed']
    }],
    default: ['pending']
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  html: {
    type: String
  }
  
});

module.exports = mongoose.model('Jobs', JobSchema);

