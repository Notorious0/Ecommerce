const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Kayıt Rotası
router.post('/SignUp', async (req, res) => {
    const { username, email, password, phone } = req.body;
    try {
        const user = new User({ username, email, password, phone });
        await user.save();
        res.status(201).send('Kullanıcı başarı ile oluşturuldu.');
    } catch (error) {
        console.error("Kayıt işlemi başarısız oldu:", error);
        res.status(400).send("Kayıt işlemi başarısız oldu.");
    }
});

// Giriş Rotası
router.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("Kullanıcı bulunamadı.");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Yanlış şifre.');
        }
        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.status(200).json({ token, user }); 
    } catch (error) {
        console.error("Giriş işlemi başarısız oldu:", error);
        res.status(400).send('Giriş işlemi başarısız oldu.');
    }
});



module.exports = router;
