const express = require('express');

var app = express();

app.use(express.static(__dirname+ '/public'));

app.get('/' , (req,res)=> {
  //res.send("<h1>hello express</h1>");
  res.send({
    name: "Alex",
    likes: [
      'bowling',
      'coding'
    ]
  });
});

app.get('/about',(req,res)=> {
  res.send("About page");
});

app.get('/bad',(req,res)=> {
  res.send({
    errorMessage : "Error handling request"
  });
});
app.listen(3000);
