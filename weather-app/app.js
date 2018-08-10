const request = require('request');
const yargs = require('yargs');

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
var encodedAddress = encodeURIComponent(argv.address);
var strURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
console.log(encodedAddress);
console.log(strURI);
request({
  url: strURI,
  json: true
}, (error,response,body) => {
  // callback
  // console.log(JSON.stringify(body,null,2));
  console.log("Address:" + body.results[0].formatted_address);
  console.log("Lat:" + body.results[0].geometry.location.lat);
  console.log("Lng:" + body.results[0].geometry.location.lng);
});
