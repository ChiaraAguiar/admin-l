const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log(" esta funcionando"))
  .catch(err => console.log("no funcion", err));
