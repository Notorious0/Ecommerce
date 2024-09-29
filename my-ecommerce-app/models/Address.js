const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});

const Address = mongoose.model('Address', AddressSchema);
module.exports = Address;
