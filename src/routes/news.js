const express = require('express');
const newsRouter = express.Router();
const newsController = require('../app/controllers/NewsController');

// newsController.index
newsRouter.get('/:slug', newsController.show);
newsRouter.get('/', newsController.index);

module.exports = newsRouter;
