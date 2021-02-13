const router = require('express').Router();
//import controllers
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsWithinRadius,
} = require('../controllers/bootcamps');

router.route('/radius/:zipcode/:distance').get(getBootcampsWithinRadius);
router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
