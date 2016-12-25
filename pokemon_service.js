/**
 * Created by Krishna Chaitanya Kandula on 12/25/2016.
 */

const axios = require('axios');
const jf = require('jsonfile');
const pokemon = require('./pokemon');

let getDataFromService = (start, end, pokemonList) => {
    let baseUrl = `http://pokeapi.co/api/v2/pokemon/${start}`;
    if(start > end){
        console.log(JSON.stringify(pokemonList));
        let obj = {name: 'Test'};
        jf.writeFile('./data.json', pokemonList, (error) => {
            // console.log(error);
        });
    }
    else {
        console.log(start);
        axios.get(baseUrl).then(response => {
            pokemonList.push(getPokemonFromData(response.data));
            getDataFromService(start + 1, end, pokemonList);
        }).catch(error => {
            console.error('ERROR:', error);
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

module.exports = {
    getDataFromService
}