var express = require('express');
var router = express.Router();
// mongodb://heroku_hs7hz08v:rpnlo249tq6emoqj9neucfo6ts@ds159129.mlab.com:59129/heroku_hs7hz08v

let db = []

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(db);
  res.render('index', {db});
});

router.post('/', (req, res) => {
  console.log(req.body);
  let {firstname, lastname} = req.body

  let user = db.find(row => row.firstname == firstname)

  if (user === undefined) {
    req.body.viewCount = 1
    db.push(req.body)
  } else {
    user.viewCount = ++user.viewCount || 1
    console.log('View count arttırdım');
    req.body.viewCount = user.viewCount
  }

  res.render('index', {...req.body})
})

router.get('/sil/:firstname', (req, res) => {
  let {firstname} = req.params
  db = db.filter(row => row.firstname !== firstname)
  console.log(db);
  res.json({status:true})
})

module.exports = router;
