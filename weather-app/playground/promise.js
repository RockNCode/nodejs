var asyncAdd = (a,b) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('Not a number');
      }
    }, 1500);
  });
};

asyncAdd(10,4).then((result)=>{
  console.log(result);
  return asyncAdd(result,33);
}).then((result)=>{
  console.log("Second result: " + result);
}).catch((errorMessage) => {
  console.log("Should be a number");
});
