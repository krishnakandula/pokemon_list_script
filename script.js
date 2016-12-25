const axios = require('axios');
const pokemon = require('./pokemon');
const jf = require('jsonfile');

let start = 1;
let end = 10;

let getDataFromService = (start, pokemonList, end) => {
	let baseUrl = `http://pokeapi.co/api/v2/pokemon/${start}`;
	if(start > end){
		console.log(JSON.stringify(pokemonList));
		let obj = {name: 'Test'};
		jf.writeFile('./data.json', pokemonList, (error) => {
			console.log(error);
		});
	}
	else {
		console.log(start);
		axios.get(baseUrl).then(response => {
			pokemonList.push(getPokemonFromData(response.data));
			getDataFromService(start + 1, pokemonList, end);
		}).catch(error => {
			
		});
	}
}

let getPokemonFromData = (data) => {
	let p = new pokemon.Pokemon();
	
	p.id = data.id;
	p.name = data.name;
	p.type1 = data.types[0].type.name;
	if (data.types.length > 1)
		p.type2 = data.types[1].type.name;
	
	return p;
}

getDataFromService(start, [], end);