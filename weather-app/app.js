const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: "Address to fetch weather for.",
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

// console.log(argv.s);
geocode.geocodeAddress(argv.address, (errorMessage,results) => {
  if(errorMessage) {
    console.log("Error : " + errorMessage);
  } else {
    // console.log(JSON.stringify(results,undefined,2));
    console.log("Weather for address : " + results.address);
    weather.getWeather(results.latitude,results.longitude, (error,res) => {
      if(error){
        console.log(error);
      } else {
        console.log("Current temperature (F) : " + res.currentTemperature);
        console.log("Aparent temperature (F) : " + res.aparentTemperature);

      }

    });
  }
});
