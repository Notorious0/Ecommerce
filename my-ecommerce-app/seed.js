const mongoose = require('mongoose');
const Product = require('./models/Product'); // Ürün modelinizi içe aktarın
const dotenv = require('dotenv');

dotenv.config();

const products = [
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166314_jordan-m-j-ess-stmt-flc-po-dq7338-010.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166314_jordan-m-j-ess-stmt-flc-po-dq7338-010.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166315_jordan-m-j-ess-stmt-flc-po-dq7338-010.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166316_jordan-m-j-ess-stmt-flc-po-dq7338-010.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Blue',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166324_jordan-m-j-ess-stmt-flc-po-dq7338-464.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166325_jordan-m-j-ess-stmt-flc-po-dq7338-464.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166326_jordan-m-j-ess-stmt-flc-po-dq7338-464.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price: 2449.30,
    brand: 'Jordan',
    description: 'Jordan M J Ess Stmt Flc Po',
    category: 'Sweatshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0171556_jordan-essentials-sweatshirt-fb6932-010.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0171556_jordan-essentials-sweatshirt-fb6932-010.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0171557_jordan-essentials-sweatshirt-fb6932-010.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0171558_jordan-essentials-sweatshirt-fb6932-010.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Gray',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0170823_jordan-essentials-sweatshirt-fb6932-091.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0170824_jordan-essentials-sweatshirt-fb6932-091.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0170825_jordan-essentials-sweatshirt-fb6932-091.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price: 2249.30,
    brand: 'Jordan',
    description: 'Jordan Essentials Sweatshirt',
    category: 'Sweatshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0179998_champion-crewneck-sweatshirt-219869-kk001.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0179998_champion-crewneck-sweatshirt-219869-kk001.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0179999_champion-crewneck-sweatshirt-219869-kk001.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0180000_champion-crewneck-sweatshirt-219869-kk001.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Green',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0185456_champion-crewneck-sweatshirt-219869-gs573.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0185452_champion-crewneck-sweatshirt-219869-gs573.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0185453_champion-crewneck-sweatshirt-219869-gs573.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price: 1959.30,
    brand: 'Champion',
    description: 'Champion Crew Sweatshirt',
    category: 'Sweatshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0179962_champion-hooded-sweatshirt-219827-em021.jpeg',
    colors: [
      {
        colorName: 'Gray',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0179962_champion-hooded-sweatshirt-219827-em021.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0179959_champion-hooded-sweatshirt-219827-em021.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0179960_champion-hooded-sweatshirt-219827-em021.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'White',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0185339_champion-hooded-sweatshirt-219827-ww001.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0185340_champion-hooded-sweatshirt-219827-ww001.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0185341_champion-hooded-sweatshirt-219827-ww001.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price: 2099.30,
    brand: 'Champion',
    description: 'Champion Hooded Sweatshirt',
    category: 'Sweatshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0188164_nike-club-fleece-polo-fn3112-410.jpeg',
    colors: [
      {
        colorName: 'Blue',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0188164_nike-club-fleece-polo-fn3112-410.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0188165_nike-club-fleece-polo-fn3112-410.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0188167_nike-club-fleece-polo-fn3112-410.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Gray',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0187631_nike-club-fleece-polo-fn3112-063.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0187632_nike-club-fleece-polo-fn3112-063.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0187634_nike-club-fleece-polo-fn3112-063.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price: 3099.00,
    brand: 'Nike',
    description: 'Nike Club Long-Sleeve',
    category: 'Sweatshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0198178_nike-nba-team-31-club-dx9793-010.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0198178_nike-nba-team-31-club-dx9793-010.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0198179_nike-nba-team-31-club-dx9793-010.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0198180_nike-nba-team-31-club-dx9793-010.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Blue',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0165008_nike-nba-team-31-club-dx9793-495.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0165009_nike-nba-team-31-club-dx9793-495.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0165010_nike-nba-team-31-club-dx9793-495.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price:  1889.30,
    brand: 'Nike',
    description: 'Nike Nba Team 31 Club',
    category: 'Sweatshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0196306_jordan-flight-essentials-85-mens-t-shirt-fz1912-010.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0196306_jordan-flight-essentials-85-mens-t-shirt-fz1912-010.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0196307_jordan-flight-essentials-85-mens-t-shirt-fz1912-010.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0196308_jordan-flight-essentials-85-mens-t-shirt-fz1912-010.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'White',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0196311_jordan-flight-essentials-85-mens-t-shirt-fz1912-133.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0196312_jordan-flight-essentials-85-mens-t-shirt-fz1912-133.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0196313_jordan-flight-essentials-85-mens-t-shirt-fz1912-133.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price:  1749.00,
    brand: 'Jordan',
    description: 'Jordan Flight 85 T-Shirt',
    category: 'Tshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164501_jordan-m-j-jumpman-emb-ss-crew-dc7485-010.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164501_jordan-m-j-jumpman-emb-ss-crew-dc7485-010.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164502_jordan-m-j-jumpman-emb-ss-crew-dc7485-010.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164503_jordan-m-j-jumpman-emb-ss-crew-dc7485-010.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'White',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166160_jordan-m-j-jumpman-emb-ss-crew-dc7485-100.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166161_jordan-m-j-jumpman-emb-ss-crew-dc7485-100.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0166162_jordan-m-j-jumpman-emb-ss-crew-dc7485-100.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price:  1149.00,
    brand: 'Jordan',
    description: 'Jordan Jumpman T-Shirt',
    category: 'Tshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0199155_champion-ss-tee-220256-kk001.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0199155_champion-ss-tee-220256-kk001.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0199156_champion-ss-tee-220256-kk001.jpeg', 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0199157_champion-ss-tee-220256-kk001.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Blue',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0200776_champion-ss-tee-220256-bs008.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0200777_champion-ss-tee-220256-bs008.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0200778_champion-ss-tee-220256-bs008.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price:  1399.00,
    brand: 'Champion',
    description: 'Champion SS Tee',
    category: 'Tshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0189342_champion-t-t-shirt-220017-kk001.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0189342_champion-t-t-shirt-220017-kk001.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0189343_champion-t-t-shirt-220017-kk001.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0189344_champion-t-t-shirt-220017-kk001.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Gray',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0184276_champion-t-t-shirt-220017-em004.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0184274_champion-t-t-shirt-220017-em004.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0184275_champion-t-t-shirt-220017-em004.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price:  1399.00,
    brand: 'Champion',
    description: 'Champion T T-Shirt',
    category: 'Tshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0178585_nike-m-nsw-prem-essntl-sust-tee-do7392-100.jpeg',
    colors: [
      {
        colorName: 'White',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0178585_nike-m-nsw-prem-essntl-sust-tee-do7392-100.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0178586_nike-m-nsw-prem-essntl-sust-tee-do7392-100.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0178587_nike-m-nsw-prem-essntl-sust-tee-do7392-100.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'Gray',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0104138_nike-m-nsw-prem-essntl-sust-tee-do7392-017.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0104139_nike-m-nsw-prem-essntl-sust-tee-do7392-017.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0104140_nike-m-nsw-prem-essntl-sust-tee-do7392-017.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price:  1549.00,
    brand: 'Nike',
    description: 'Nike Sportswear T-Shirt',
    category: 'Tshirt',
  },
  {
    image: 'https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164834_nike-m-nsw-club-tee-ar4997-013.jpeg',
    colors: [
      {
        colorName: 'Black',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164834_nike-m-nsw-club-tee-ar4997-013.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164835_nike-m-nsw-club-tee-ar4997-013.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0164836_nike-m-nsw-club-tee-ar4997-013.jpeg'],
        sizes: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 10 },
          { size: 'L', quantity: 10 },
          { size: 'XL', quantity: 10 },
        ],
      },
      {
        colorName: 'White',
        images: ['https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0194628_nike-sportswear-club-t-shirt-ar4997-100.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0194629_nike-sportswear-club-t-shirt-ar4997-100.jpeg','https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0194630_nike-sportswear-club-t-shirt-ar4997-100.jpeg'],
        sizes: [
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 10 },
            { size: 'L', quantity: 10 },
            { size: 'XL', quantity: 10 },
        ],
      },
    ],
    price:  999.00,
    brand: 'Nike',
    description: 'Nike Sportswear Club T-Shirt',
    category: 'Tshirt',
  },


];

async function seedDB() {
  try {
    // MongoDB bağlantısı
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB\'ye bağlanıldı');

    // Ürünleri ekleyin
    await Product.deleteMany({}); // Önceki ürünleri siler
    await Product.insertMany(products);
    console.log('Ürünler başarıyla eklendi');

    // Bağlantıyı kapatın
    mongoose.connection.close();
  } catch (error) {
    console.error('Ürünleri eklerken hata oluştu:', error);
    mongoose.connection.close();
  }
}

seedDB();
