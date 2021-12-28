const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

const leadershipSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  image : {
    type : Image,
    required : true
  },
  label: {
    type : String,
    default: ''
  },
  description: {
    type : String,
    required: true
  },
  featured:{
    type: Boolean,
    default:false    
  }

});
var Leaders = mongoose.model('Leader', leadershipSchema);
module.exports = Leaders;