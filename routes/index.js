import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/deploy', function(req, res, next) {
  res.render('deploy', { title: 'Express' });
});

//module.exports = router;

export default router
