const db = require("../prismaClient"); // Assuming you use Prisma as an ORM
const faker = require("faker"); // Use faker for generating mock data

const mockDataService = {
  // Fetch all mock data entries
  getAllMockData: async () => {
    return await db.mockData.findMany();
  },

  // Fetch a specific mock data entry by its ID
  getMockDataById: async (id) => {
    return await db.mockData.findUnique({ where: { id } });
  },

  // Create a new mock data entry
  createMockData: async (data) => {
    const newData = await db.mockData.create({
      data,
    });
    return newData;
  },

  // Update an existing mock data entry by its ID
  updateMockData: async (id, updateData) => {
    const updatedData = await db.mockData.update({
      where: { id },
      data: updateData,
    });
    return updatedData;
  },

  // Delete a mock data entry by its ID
  deleteMockData: async (id) => {
    await db.mockData.delete({ where: { id } });
  },

  // Test a mock data entry with some validation or processing logic
  testMockData: async (data) => {
    // Implement logic for testing mock data (e.g., validating against a schema)
    // This is a placeholder and can be customized according to your needs
    return { valid: true, data };
  },

  // Fetch available mock data schemas
  getMockDataSchemas: async () => {
    // Logic to fetch mock data schemas, could be from a predefined list or a database table
    return await db.mockDataSchema.findMany();
  },

  // Generate mock data based on a schema and options
  generateMockData: async (schemaId, options) => {
    const schema = await db.mockDataSchema.findUnique({
      where: { id: schemaId },
    });
    if (!schema) throw new Error("Schema not found");

    // Example logic to generate mock data using faker and the schema
    const generatedData = [];
    for (let i = 0; i < (options.count || 1); i++) {
      const entry = {};
      schema.fields.forEach((field) => {
        entry[field.name] = faker.fake(field.fakerTemplate);
      });
      generatedData.push(entry);
    }

    return generatedData;
  },

  // Clone an existing mock data entry by its ID
  cloneMockData: async (id) => {
    const data = await db.mockData.findUnique({ where: { id } });
    if (!data) throw new Error("Mock data not found");

    const clonedData = { ...data, id: undefined }; // Remove the ID to create a new entry
    const newEntry = await db.mockData.create({
      data: clonedData,
    });
    return newEntry;
  },
};

module.exports = mockDataService;
