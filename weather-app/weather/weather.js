const request = require('request');

var getWeather = (lat,lng,callback) => {
  var strURI = `https://api.darksky.net/forecast/ffe21182f00d50285ab4099996016adb/${lat},${lng}`
  // console.log(strURI);
  request({
    url: strURI,
    json: true
  }, (error,response,body) => {
    // callback
    if(body.error) {
      callback("Code: " + body.code + " : " + body.error,undefined);
      return;
    } else {
      callback(undefined,{
        currentTemperature: body.currently.temperature,
        aparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}

module.exports.getWeather = getWeather;
