const coursesRouter = require('express').Router();
//import controllers
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsWithinRadius,
} = require('../controllers/bootcamps');

//include other resource routers
const courseRouter = require('./courses');

//Re-router into other resource routers
coursesRouter.use('/:bootcampId/courses', courseRouter);

coursesRouter.route('/radius/:zipcode/:distance').get(getBootcampsWithinRadius);
coursesRouter.route('/').get(getBootcamps).post(createBootcamp);
coursesRouter
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = coursesRouter;
