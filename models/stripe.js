var mongoose = require('mongoose');

var stripeSchema = new mongoose.Schema({
  cardnumber: String,
  name: String,
  card_id:String,
  addres_zip:String,
  exp_month:Number,
  exp_year:Number,
  token_id:String,
  clientip:String
});

module.exports = mongoose.model('stripe', stripeSchema);
