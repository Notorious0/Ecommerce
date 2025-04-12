const express = require('express');
const Order = require('../models/Order'); 
const authenticateUser = require('../middleware/authenticateUser'); 
const router = express.Router();

// Sipariş oluşturma route'u
router.post('/orders', authenticateUser, async (req, res) => {
    try {
        const userId = req.user._id;

        const newOrder = new Order({
            userId: userId,
            items: req.body.items,
            totalAmount: req.body.totalAmount,
        });

        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (error) {
        console.error('Sipariş oluşturma hatası:', error);
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
