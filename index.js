const express = require('express');
const jsonfile = require('jsonfile');
const reactEngine = require('express-react-views').createEngine();


const FILE = 'pokedex.json';
const FILE2 = 'pokedexcopy.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true }));

app.engine('jsx', reactEngine);
// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');


/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/', (request, response) => {

  jsonfile.readFile(FILE, (err, obj) => {
    let pokemonObj = obj.pokemon;
    const context = {
    all_Pokemon: pokemonObj
    };

    response.render('home', context);
  });
});


app.get('/:id', (request, response) => {

  jsonfile.readFile(FILE, (err, obj) => {

    let inputId = request.params.id;

    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {

      // send 404 back
      response.status(404);
      response.send("not found");
    } else {
      
      response.render('pokemonById', pokemon);
    }
  });
});

app.get('/pokemon/new', (req, res) => {
  res.render('form');
});


app.post('/pokemon', (req, res) => {
  
  let newPokemon = req.body;
  res.render('formSubmit', newPokemon);

  jsonfile.readFile(FILE, (err, obj) => {
    let pokemonObj = obj.pokemon;

    let newPokemon = {};
    newPokemon["id"] = req.body.id;
    newPokemon["num"] = req.body.num;
    newPokemon["name"] = req.body.name;
    newPokemon["image"] = req.body.img;
    newPokemon["height"] = parseInt(req.body.height)/100 + ' m';
    newPokemon["weight"] = req.body.weight + ' kg';
    
    pokemonObj.push(newPokemon);

    jsonfile.writeFile(FILE2, pokemonObj, function (err) {
    console.error(err)
    });

  })
})
/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
