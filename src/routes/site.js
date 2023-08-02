const express = require('express');
const newsRouter = express.Router();
const siteController = require('../app/controllers/SiteController');

// siteController.index
newsRouter.get('/search', siteController.search);
newsRouter.get('/', siteController.index);

module.exports = newsRouter;
