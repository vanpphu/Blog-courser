const express = require('express');
const newsRouter = express.Router();
const courseController = require('../app/controllers/CourseController');

// newsController.index
newsRouter.get('/create', courseController.create);
newsRouter.post('/store', courseController.store);
newsRouter.get('/:id/edit', courseController.edit);
newsRouter.put('/:id', courseController.update);
newsRouter.delete('/:id', courseController.destroy);
newsRouter.get('/:slug', courseController.show);

module.exports = newsRouter;
