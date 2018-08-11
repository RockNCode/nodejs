const request = require('request');
const yargs = require('yargs');

var geocodeAddress = (address,callback) => {
  var encodedAddress = encodeURIComponent(address);
  var strURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
  console.log(encodedAddress);
  console.log(strURI);
  request({
    url: strURI,
    json: true
  }, (error,response,body) => {
    // callback
    // console.log(JSON.stringify(body,null,2));
    if(error) {
      errorStr = "Unable to connect to Google servers.";
      callback(errorStr,undefined);
    } else if(body.status === 'ZERO_RESULTS') {
      errorStr = "Unable to find that address";
      callback(errorStr,undefined);
    } else {
       console.log("Address:" + body.results[0].formatted_address);
       callback(undefined,{
         address: body.results[0].formatted_address,
         latitude: body.results[0].geometry.location.lat,
         longitude: body.results[0].geometry.location.lng
       });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
