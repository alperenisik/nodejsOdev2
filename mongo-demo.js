const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_hs7hz08v:rpnlo249tq6emoqj9neucfo6ts@ds159129.mlab.com:59129/heroku_hs7hz08v');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save()
  .then(console.log)
  .catch(console.log)
