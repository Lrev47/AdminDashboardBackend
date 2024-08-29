const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const contentService = {
  // Fetch all content items
  getAllContent: async () => {
    return await db.content.findMany();
  },

  // Fetch a specific content item by its ID
  getContentById: async (id) => {
    return await db.content.findUnique({ where: { id } });
  },

  // Create a new content item
  createContent: async (contentData) => {
    const content = await db.content.create({
      data: contentData,
    });
    return content;
  },

  // Update an existing content item by its ID
  updateContent: async (id, updateData) => {
    const content = await db.content.update({
      where: { id },
      data: updateData,
    });
    return content;
  },

  // Delete a content item by its ID
  deleteContent: async (id) => {
    await db.content.delete({ where: { id } });
  },

  // Publish a content item by its ID
  publishContent: async (id) => {
    await db.content.update({
      where: { id },
      data: { published: true },
    });
  },

  // Unpublish a content item by its ID
  unpublishContent: async (id) => {
    await db.content.update({
      where: { id },
      data: { published: false },
    });
  },

  // Fetch all tags associated with content
  getTags: async () => {
    return await db.tag.findMany();
  },

  // Fetch all authors associated with content
  getAuthors: async () => {
    return await db.author.findMany();
  },

  // Upload media associated with content
  uploadContentMedia: async (file) => {
    // Logic to handle file upload (e.g., to cloud storage) and save reference in DB
    const media = await db.media.create({
      data: {
        // Assuming you have logic to generate a URL or file path
        url: `/media/${file.filename}`,
      },
    });
    return media;
  },

  // Fetch all media items
  getAllMedia: async () => {
    return await db.media.findMany();
  },

  // Fetch a specific media item by its ID
  getMediaById: async (id) => {
    return await db.media.findUnique({ where: { id } });
  },

  // Delete a media item by its ID
  deleteMedia: async (id) => {
    await db.media.delete({ where: { id } });
  },

  // Fetch all comments
  getAllComments: async () => {
    return await db.comment.findMany();
  },

  // Create a new comment
  createComment: async (commentData) => {
    const comment = await db.comment.create({
      data: commentData,
    });
    return comment;
  },

  // Delete a comment by its ID
  deleteComment: async (id) => {
    await db.comment.delete({ where: { id } });
  },

  // Fetch all revisions of a specific content item
  getRevisions: async (contentId) => {
    return await db.revision.findMany({ where: { contentId } });
  },

  // Restore a specific revision of a content item
  restoreRevision: async (contentId, revisionId) => {
    const revision = await db.revision.findUnique({
      where: { id: revisionId },
    });
    if (!revision) throw new Error("Revision not found");

    await db.content.update({
      where: { id: contentId },
      data: {
        content: revision.content,
      },
    });
  },
};

module.exports = contentService;
