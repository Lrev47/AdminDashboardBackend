const mockDataService = require("../services/mockDataService");

const mockDataController = {
  getAllMockData: async (req, res, next) => {
    try {
      const mockData = await mockDataService.getAllMockData();
      res.status(200).json(mockData);
    } catch (error) {
      next(error);
    }
  },

  getMockData: async (req, res, next) => {
    try {
      const data = await mockDataService.getMockDataById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  createMockData: async (req, res, next) => {
    try {
      const data = await mockDataService.createMockData(req.body);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  updateMockData: async (req, res, next) => {
    try {
      const data = await mockDataService.updateMockData(
        req.params.id,
        req.body
      );
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  deleteMockData: async (req, res, next) => {
    try {
      await mockDataService.deleteMockData(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  testMockData: async (req, res, next) => {
    try {
      const result = await mockDataService.testMockData(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  getMockDataSchemas: async (req, res, next) => {
    try {
      const schemas = await mockDataService.getMockDataSchemas();
      res.status(200).json(schemas);
    } catch (error) {
      next(error);
    }
  },

  generateMockData: async (req, res, next) => {
    try {
      const generatedData = await mockDataService.generateMockData(
        req.body.schemaId,
        req.body.options
      );
      res.status(201).json(generatedData);
    } catch (error) {
      next(error);
    }
  },

  cloneMockData: async (req, res, next) => {
    try {
      const clonedData = await mockDataService.cloneMockData(req.params.id);
      res.status(201).json(clonedData);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = mockDataController;
