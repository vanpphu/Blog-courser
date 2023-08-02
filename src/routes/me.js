const express = require('express');
const newsRouter = express.Router();
const meController = require('../app/controllers/MeController');

// newsController.index
newsRouter.get('/stored/courses', meController.storedCourses);

module.exports = newsRouter;
