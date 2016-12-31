/**
 * Created by Krishna Chaitanya Kandula on 12/25/2016.
 */

const axios = require('axios');
const jf = require('jsonfile');
const pokemon = require('./pokemon');

let getDataFromService = (start, end, pokemonList) => {
    let pokemonBaseUrl = `http://pokeapi.co/api/v2/pokemon/${start}`;
    //Used for getting the pokedex description for each pokemon
    let speciesBaseUrl = `https://www.pokeapi.co/api/v2/pokemon-species/${start}/`

    //Recursive base case
    if(start > end){
        console.log('Writing data to file...');
        let obj = {name: 'Test'};
        jf.writeFile('./initial_data.json', pokemonList, (error) => {
            console.log('Finished writing data to ./initial_data.json');
        });
    }
    else {
        console.log(`Retrieving data for Pokemon with id ${start}`);
        axios.all([
            axios.get(pokemonBaseUrl),
            axios.get(speciesBaseUrl)
        ]).then(axios.spread((pokemonResponse, speciesResponse) => {
            let newPokemon = getPokemonFromData(pokemonResponse.data, speciesResponse.data);
            pokemonList.push(newPokemon);
            getDataFromService(start + 1, end, pokemonList);
        })).catch(error => {
            console.error('ERROR:', error);
        });
    }
}

let getPokemonFromData = (pokemonData, descriptionData) => {
    let p = new pokemon.Pokemon();

    p.id = pokemonData.id;
    p.name = pokemonData.name;
    p.type1 = pokemonData.types[0].type.name;
    if (pokemonData.types.length > 1)
        p.type2 = pokemonData.types[1].type.name;
    p.front_default_sprite_uri = pokemonData.sprites.front_default;
    let description =  descriptionData.flavor_text_entries[1].flavor_text;

    //Replace newline characters from response with spaces
    p.description = description.replace(/\n/g, ' ');
    return p;
}

module.exports = {
    getDataFromService
}