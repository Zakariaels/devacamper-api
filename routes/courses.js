const coursesRouter = require('express').Router({ mergeParams: true });
//import controllers
const { getCourses } = require('../controllers/courses');

coursesRouter.route('/').get(getCourses);

module.exports = coursesRouter;
