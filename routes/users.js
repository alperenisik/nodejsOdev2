const router = require('express').Router()

let db = []


router.get('/api', (req, res) => {
  res.json(db)
})

router.get('/:username', (req, res, next) => {

  const {username} = req.params
  let message

  let user = db.find(row => row.username === username)

  if (user === undefined) {
    db.push({username, count: 1})
    message = `Hoşgeldin ${username}`
  } else {
    user.count++
    message = `Hoşgeldin ${username} x${user.count} kez geldin`
  }

  res.render('user', { username, message })
})

router.get('/:username/api', (req, res) => {
  const {username} = req.params
  let message
  let count = 0
  let user = db.find(row => row.username === username)

  if (user === undefined) {
    message = `KULLANICI MEVCUT DEĞİL`
  } else {
    message = `${username} x${user.count} kez geldi`
    count = user.count
  }

  res.json({username, count, message})
})

module.exports = router
