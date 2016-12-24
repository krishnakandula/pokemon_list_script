const axios = require('axios');
const pokemon = require('./pokemon');
const baseUrl = 'http://pokeapi.co/api/v2/pokemon/1';

let p = new pokemon.Pokemon(1, 'hello');
console.log(p.id, p.name);

axios.get(baseUrl).then(response => {
	console.log(response.data);
}).catch(error => {
	console.log(error);
});