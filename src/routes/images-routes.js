const express = require("express");
const imageController = require("../Controllers/images");

const router = express.Router();

// Image Routes
router.post("/upload", imageController.uploadImage);
router.get("/", imageController.getAllImages);
router.get("/:id", imageController.getImage);
router.delete("/:id", imageController.deleteImage);
router.put("/:id", imageController.updateImage);

// Metadata and Sharing Routes
router.get("/:id/metadata", imageController.getMetadata);
router.post("/:id/share", imageController.shareImage);

// Image Processing Routes
router.post("/:id/resize", imageController.resizeImage);
router.post("/:id/compress", imageController.compressImage);
router.post("/:id/convert", imageController.convertImage);
router.get("/:id/download", imageController.downloadImage);
router.post("/:id/annotate", imageController.annotateImage);
router.post("/:id/crop", imageController.cropImage);

// Tagging Routes
router.get("/tags", imageController.getAllTags);
router.get("/tags/:tag", imageController.getImageByTag);

module.exports = router;
