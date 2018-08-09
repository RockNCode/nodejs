console.log('Starting app');

setTimeout(() => {
  console.log("Timeout!");
}, 2000);

setTimeout(() => {
  console.log("Second callback!");
}, 0);


console.log ('Finishing app');
