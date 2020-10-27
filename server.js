const express = require('express')
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');
require('./hbs/helpers')
const  port = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.render('home',
    {
      nombre: 'Daniel'
    })
})

app.get('/about', function (req, res) {
  res.render('about',
    {
      nombre: 'Daniel'
    })
})

app.listen(port, () => {
  console.log(`escuchando peticiones en puerto ${port}`)
})