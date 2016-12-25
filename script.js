const yargs = require('yargs');
const service = require('./pokemon_service');

const argv = yargs.options({
        s: {
            demand: false,
            alias: 'start',
            describe: 'Starting index of Pokedex to grab data from. Minimum is 1.',
            default: 1,
            number: true
        },
        e: {
            demand: false,
            alias: 'end',
            describe: 'Ending index of Pokedex to grab data from. Maximum is 811.',
            default: 10,
            number:true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

if(argv.start <= 0){
    console.error(`ERROR: No Pokemon exists with id ${argv.start}`);
    throw 'INVALID_ID'
}

if(argv.start > argv.end){
    console.error('ERROR: Please enter a valid range.')
    throw 'INVALID_RANGE'
}

console.log(`Grabbing JSON data for Pokemon in range of ${argv.start} - ${argv.end}`);
service.getDataFromService(argv.start, argv.end, []);