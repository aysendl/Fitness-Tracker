const express = require("express");
var PORT = process.env.PORT || 3001; 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.listen(PORT, function() { 
  console.log("App listening on PORT " + PORT); 
});
