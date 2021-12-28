const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

const promotionSchema = new Schema({
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
  price: {
    type: Currency,
    required: true,
    min: 0
  },
  description: {
    type : String,
    required: true
  },
  featured:{
    type: Boolean,
    default : false
  }

});
var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;