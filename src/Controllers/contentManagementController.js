const contentService = require("../services/contentService");

const contentController = {
  getAllContent: async (req, res, next) => {
    try {
      const content = await contentService.getAllContent();
      res.status(200).json(content);
    } catch (error) {
      next(error);
    }
  },

  getContent: async (req, res, next) => {
    try {
      const content = await contentService.getContentById(req.params.id);
      res.status(200).json(content);
    } catch (error) {
      next(error);
    }
  },

  createContent: async (req, res, next) => {
    try {
      const content = await contentService.createContent(req.body);
      res.status(201).json(content);
    } catch (error) {
      next(error);
    }
  },

  updateContent: async (req, res, next) => {
    try {
      const content = await contentService.updateContent(
        req.params.id,
        req.body
      );
      res.status(200).json(content);
    } catch (error) {
      next(error);
    }
  },

  deleteContent: async (req, res, next) => {
    try {
      await contentService.deleteContent(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  publishContent: async (req, res, next) => {
    try {
      await contentService.publishContent(req.params.id);
      res.status(200).json({ message: "Content published successfully" });
    } catch (error) {
      next(error);
    }
  },

  unpublishContent: async (req, res, next) => {
    try {
      await contentService.unpublishContent(req.params.id);
      res.status(200).json({ message: "Content unpublished successfully" });
    } catch (error) {
      next(error);
    }
  },

  getTags: async (req, res, next) => {
    try {
      const tags = await contentService.getTags();
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  },

  getAuthors: async (req, res, next) => {
    try {
      const authors = await contentService.getAuthors();
      res.status(200).json(authors);
    } catch (error) {
      next(error);
    }
  },

  uploadContentMedia: async (req, res, next) => {
    try {
      const media = await contentService.uploadContentMedia(req.file);
      res.status(201).json(media);
    } catch (error) {
      next(error);
    }
  },

  getAllMedia: async (req, res, next) => {
    try {
      const media = await contentService.getAllMedia();
      res.status(200).json(media);
    } catch (error) {
      next(error);
    }
  },

  getMedia: async (req, res, next) => {
    try {
      const media = await contentService.getMediaById(req.params.id);
      res.status(200).json(media);
    } catch (error) {
      next(error);
    }
  },

  deleteMedia: async (req, res, next) => {
    try {
      await contentService.deleteMedia(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getAllComments: async (req, res, next) => {
    try {
      const comments = await contentService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  },

  createComment: async (req, res, next) => {
    try {
      const comment = await contentService.createComment(req.body);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  },

  deleteComment: async (req, res, next) => {
    try {
      await contentService.deleteComment(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getRevisions: async (req, res, next) => {
    try {
      const revisions = await contentService.getRevisions(req.params.id);
      res.status(200).json(revisions);
    } catch (error) {
      next(error);
    }
  },

  restoreRevision: async (req, res, next) => {
    try {
      await contentService.restoreRevision(req.params.id, req.body.revisionId);
      res.status(200).json({ message: "Revision restored successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = contentController;
