const db = require("../prismaClient"); // Assuming you use Prisma as an ORM
const fs = require("fs"); // For file system operations
const sharp = require("sharp"); // For image processing

const imageService = {
  // Upload an image
  uploadImage: async (file) => {
    // Logic to store the image in a directory or cloud storage and save its reference in the database
    const image = await db.image.create({
      data: {
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
      },
    });
    return image;
  },

  // Fetch all images
  getAllImages: async () => {
    return await db.image.findMany();
  },

  // Fetch a specific image by its ID
  getImageById: async (id) => {
    return await db.image.findUnique({ where: { id } });
  },

  // Delete an image by its ID
  deleteImage: async (id) => {
    const image = await db.image.findUnique({ where: { id } });
    if (image) {
      fs.unlinkSync(image.path); // Delete the file from the file system
      await db.image.delete({ where: { id } }); // Delete the reference from the database
    }
  },

  // Update image metadata or other properties
  updateImage: async (id, updateData) => {
    const image = await db.image.update({
      where: { id },
      data: updateData,
    });
    return image;
  },

  // Fetch metadata of an image
  getMetadata: async (id) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    const metadata = await sharp(image.path).metadata(); // Get image metadata using Sharp
    return metadata;
  },

  // Share an image by generating a shareable link
  shareImage: async (id) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    // Logic to generate a shareable link
    const shareLink = `https://yourapp.com/images/${image.id}/share`;
    return { shareLink };
  },

  // Resize an image
  resizeImage: async (id, dimensions) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    const resizedImagePath = `${image.path.split(".")[0]}_resized.${
      image.path.split(".")[1]
    }`;
    await sharp(image.path)
      .resize(dimensions.width, dimensions.height)
      .toFile(resizedImagePath);

    return { resizedImagePath };
  },

  // Compress an image
  compressImage: async (id, quality) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    const compressedImagePath = `${image.path.split(".")[0]}_compressed.${
      image.path.split(".")[1]
    }`;
    await sharp(image.path).jpeg({ quality }).toFile(compressedImagePath);

    return { compressedImagePath };
  },

  // Convert an image to a different format
  convertImage: async (id, format) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    const convertedImagePath = `${image.path.split(".")[0]}.${format}`;
    await sharp(image.path).toFormat(format).toFile(convertedImagePath);

    return { convertedImagePath };
  },

  // Download an image
  downloadImage: async (id) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    return { path: image.path, filename: image.filename };
  },

  // Annotate an image
  annotateImage: async (id, annotations) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    // Logic to annotate the image (e.g., adding text, shapes, etc.)
    const annotatedImagePath = `${image.path.split(".")[0]}_annotated.${
      image.path.split(".")[1]
    }`;
    // Example: sharp(image.path).composite([{ input: 'overlay.png', gravity: 'southeast' }]).toFile(annotatedImagePath);

    return { annotatedImagePath };
  },

  // Crop an image
  cropImage: async (id, coordinates) => {
    const image = await db.image.findUnique({ where: { id } });
    if (!image) throw new Error("Image not found");

    const croppedImagePath = `${image.path.split(".")[0]}_cropped.${
      image.path.split(".")[1]
    }`;
    await sharp(image.path).extract(coordinates).toFile(croppedImagePath);

    return { croppedImagePath };
  },

  // Fetch all tags
  getAllTags: async () => {
    return await db.tag.findMany();
  },

  // Fetch images by a specific tag
  getImagesByTag: async (tag) => {
    return await db.image.findMany({
      where: {
        tags: {
          some: {
            name: tag,
          },
        },
      },
    });
  },
};

module.exports = imageService;
