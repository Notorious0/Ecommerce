const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

// Ortam değişkenlerini yükleyin
dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Express uygulaması oluşturun
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));



// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB\'ye bağlanıldı');
}).catch((err) => {
  console.error('MongoDB bağlantı hatası:', err);
});

// Kullanıcı rotalarını ekle
const userRoutes = require('./routes/UserRoutes');
app.use('/api/auth', userRoutes);

// Ürün rotalarını ekle
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

// Sipariş rotalarını ekle
const orderRoutes = require('./routes/orderRoutes');
app.use('/api', orderRoutes);

// Adres rotalarını ekle
const addressRoutes = require('./routes/addressRoutes');
app.use('/api/address', addressRoutes);


// Adres eklemek için endpoint
app.post('/addAddress', (req, res) => {
  const { name, city, address, phone } = req.body;
  // Adresi işleme ve yanıt gönderme
  res.status(200).send({ message: 'Address added successfully', data: { name, city, address, phone } });
});

// Örnek adresleri getiren route
app.get('/api/addresses', async (req, res) => {
  try {
    const addresses = await Address.find(); // Adres modelini kullanarak verileri çekin
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Veriler alınırken hata oluştu' });
  }
});

// Ödeme intent route
app.post('/api/payment-intent', async (req, res) => {
  const { amount } = req.body;


  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'try',
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      paymentIntent: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Ödeme hatası:', error);
    res.status(500).send({ error: error.message });
  }
});

// Ana rota
app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor!');
});

// Hata yakalama middleware'i
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Sunucu hatası oluştu' });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
