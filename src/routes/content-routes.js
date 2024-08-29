const express = require("express");
const contentController = require("../Controllers/content");

const router = express.Router();

// Define routes and map them to controller methods
router.get("/", contentController.getAllContent);
router.get("/:id", contentController.getContent);
router.post("/", contentController.createContent);
router.put("/:id", contentController.updateContent);
router.delete("/:id", contentController.deleteContent);
router.post("/:id/publish", contentController.publishContent);
router.post("/:id/unpublish", contentController.unpublishContent);

router.get("/tags", contentController.getTags);
router.get("/authors", contentController.getAuthors);

router.post("/media/upload", contentController.uploadContentMedia);
router.get("/media", contentController.getAllMedia);
router.get("/media/:id", contentController.getMedia);
router.delete("/media/:id", contentController.deleteMedia);

router.get("/comments", contentController.getAllComments);
router.post("/comments", contentController.createComment);
router.delete("/comments/:id", contentController.deleteComment);

router.get("/:id/revisions", contentController.getRevisions);
router.post("/:id/revisions/restore", contentController.restoreRevision);

module.exports = router;
