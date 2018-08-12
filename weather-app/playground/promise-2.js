var request = require('request');
var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);
  var strURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
  // console.log(encodedAddress);
  // console.log(strURI);

  return new Promise((resolve,reject)=>{
    request({
      url: strURI,
      json: true
    },(error,response,body)=>{
      if(error){
        reject("Error");
      }
      else if(body.status !== 'OK') {
        reject(body.status);
      } else {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    })
  });

};

geocodeAddress('19146').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
}).catch((errorMessage)=>{
  console.log("Error: " + errorMessage);
});
