const express = require('express'); 
const Product = require('../models/Product')
const router = express.Router(); 

// Tüm ürünleri filtreleyerek listelemek için GET isteği
router.get('/products',async(req,res) => {
    try{
    const { category, brand, minPrice, maxPrice } = req.query;

     const query = {}; 
     if(category) query.category=query;
     if(brand) query.brand=query;
     if(minPrice || maxPrice){
        query.price = {}; 
        if (minPrice) query.price.$gte = minPrice; 
        if (maxPrice) query.price.$lte = maxPrice; 
     }

     const products = await Product.find(query); 
     res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({ message: 'Ürünleri getirirken hata oluştu', error });
    }
});
// Belirli bir ürünü ID ile getirmek için GET isteği
router.get('/products/:id',async(req,res) => {
    try{
        const product = await Product.findById(req.params.id); 
        if(!product){
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Ürünü getirirken hata oluştu', error });
      }
});
// Ürünü satın alınca stok sayısını azaltmak için PUT isteği
router.put('/products/:id/purchase', async(req,res) => {
    const {colorName,size} =req.body;
    try{
          const product = await Product.findById(req.params.id);
         if(!product){
            return res.status(404).json({ message: 'Ürün bulunamadı' });
         }
         const selectedColor = product.colors.find(color => color.colorName === colorName);
         if(!selectedColor){
            return res.status(404).json({ message: 'Belirtilen renk bulunamadı' });
         }
         const selectedSize = selectedColor.sizes.find(s => s.size === size);
         if(!selectedSize){
            return res.status(404).json({ message: 'Belirtilen beden bulunamadı' });
         }
        // Stok miktarını kontrol et ve azalt
        if (selectedSize.quantity >= quantity) {
        selectedSize.quantity -= quantity;  
        await product.save();  
        return res.status(200).json({ message: 'Satın alma başarılı', product }); 
      } else {
        return res.status(400).json({ message: 'Stokta yeterli ürün yok' }); 
      }
    }
    catch (error) {
        res.status(500).json({ message: 'Satın alma işleminde hata oluştu', error }); // Hata durumunda JSON formatında hata mesajı döner
      }
})
module.exports = router;