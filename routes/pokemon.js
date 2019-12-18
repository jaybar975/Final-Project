var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');



// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pokemon' });
});

router.get('/:id', async (req, res) => {
  try {
      const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
      const pokemonData = await fetch(URI);
      const json = await pokemonData.json();
      // console.log(json);
      const pokeName = await json.name;
      const pokeImg = await json.sprites.back_default;
      // console.log(pokeImg);
  
      await res.render('pokemon', {
          title: 'Pokemon Name',
          name: pokeName,
          img: pokeImg
      });
  } catch (error) {
      console.log(error);
  }
       
});


module.exports = router;
