const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv');

dotenv.config(); 

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization; 

  if (authHeader) {
    const token = authHeader.split(' ')[1]; 

    // JWT doğrulama
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Geçersiz token' });
      }
      req.user = user; 
      next();
    });
  } else {
    return res.status(401).json({ message: 'Token bulunamadı' });
  }
};
