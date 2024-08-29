const imageService = require("../services/imageService");

const imageController = {
  uploadImage: async (req, res, next) => {
    try {
      const image = await imageService.uploadImage(req.file);
      res.status(201).json(image);
    } catch (error) {
      next(error);
    }
  },

  getAllImages: async (req, res, next) => {
    try {
      const images = await imageService.getAllImages();
      res.status(200).json(images);
    } catch (error) {
      next(error);
    }
  },

  getImage: async (req, res, next) => {
    try {
      const image = await imageService.getImageById(req.params.id);
      res.status(200).json(image);
    } catch (error) {
      next(error);
    }
  },

  deleteImage: async (req, res, next) => {
    try {
      await imageService.deleteImage(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  updateImage: async (req, res, next) => {
    try {
      const image = await imageService.updateImage(req.params.id, req.body);
      res.status(200).json(image);
    } catch (error) {
      next(error);
    }
  },

  getMetadata: async (req, res, next) => {
    try {
      const metadata = await imageService.getMetadata(req.params.id);
      res.status(200).json(metadata);
    } catch (error) {
      next(error);
    }
  },

  shareImage: async (req, res, next) => {
    try {
      const shareLink = await imageService.shareImage(req.params.id);
      res.status(200).json(shareLink);
    } catch (error) {
      next(error);
    }
  },

  resizeImage: async (req, res, next) => {
    try {
      const resizedImage = await imageService.resizeImage(
        req.params.id,
        req.body.dimensions
      );
      res.status(200).json(resizedImage);
    } catch (error) {
      next(error);
    }
  },

  compressImage: async (req, res, next) => {
    try {
      const compressedImage = await imageService.compressImage(
        req.params.id,
        req.body.quality
      );
      res.status(200).json(compressedImage);
    } catch (error) {
      next(error);
    }
  },

  convertImage: async (req, res, next) => {
    try {
      const convertedImage = await imageService.convertImage(
        req.params.id,
        req.body.format
      );
      res.status(200).json(convertedImage);
    } catch (error) {
      next(error);
    }
  },

  downloadImage: async (req, res, next) => {
    try {
      const image = await imageService.downloadImage(req.params.id);
      res.status(200).json(image);
    } catch (error) {
      next(error);
    }
  },

  annotateImage: async (req, res, next) => {
    try {
      const annotatedImage = await imageService.annotateImage(
        req.params.id,
        req.body.annotations
      );
      res.status(200).json(annotatedImage);
    } catch (error) {
      next(error);
    }
  },

  cropImage: async (req, res, next) => {
    try {
      const croppedImage = await imageService.cropImage(
        req.params.id,
        req.body.coordinates
      );
      res.status(200).json(croppedImage);
    } catch (error) {
      next(error);
    }
  },

  getAllTags: async (req, res, next) => {
    try {
      const tags = await imageService.getAllTags();
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  },

  getImageByTag: async (req, res, next) => {
    try {
      const images = await imageService.getImagesByTag(req.params.tag);
      res.status(200).json(images);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = imageController;
