const express =  require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

//Routes
router.get('/', galleryController.getAllPhotos);
router.get('/:id', galleryController.getPhotoById);
// router.post('/', galleryController.createPhoto);
// router.put('/:id', galleryController.updatePhoto);
// router.delete('/:id', galleryController.deletePhoto);

module.exports=router;