var somePromise = new Promise( (resolve,reject) => {
  setTimeout(()=>{
    //resolve('hey, it worked.');
    reject('Unable to fullfil promise.');
  },2000);

});

somePromise.then((message)=>{
  console.log(message);
},(errorMessage)=>{
  console.log(errorMessage);
});
