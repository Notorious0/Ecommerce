const mongoose = require('mongoose');

// Ürün şemasını tanımla
const productSchema = new mongoose.Schema({
    image: {
      type: String,
      required: true
    },
    colors: [
      {
        colorName: String,
        images: [String],  
        sizes: [
          {
            size: String,
            quantity: Number
          }
        ]
      }
    ],
    price:Number,
    brand:String,
    description:String,
    category:String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;