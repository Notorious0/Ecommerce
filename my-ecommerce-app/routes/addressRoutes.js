const express = require('express');
const Address = require('../models/Address');
const router = express.Router();

router.post('/addAddress', async (req, res) => {
  console.log(req.body);
  const { name, city, address, phone } = req.body;
  try {
    const newAddress = new Address({ name, city, address, phone });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    console.error('Adres ekleme hatası:', error);
    res.status(400).send('Adres eklenemedi.');
  }
});



router.get('/Addresses', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    console.error('Adresleri getirme hatası:', error);
    res.status(500).send('Adresler alınamadı.');
  }
});

router.delete('/deleteAddress/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Address.findByIdAndDelete(id);
    res.status(200).json({ message: 'Adres silindi.' });
  } catch (error) {
    console.error('Adres silme hatası:', error);
    res.status(400).send('Adres silinemedi.');
  }
});


module.exports = router;
