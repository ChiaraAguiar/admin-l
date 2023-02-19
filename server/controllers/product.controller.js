const { Products } = require("../models/product.model");

modules.exports.index = (req, res) => {
  res.json({
    message: "tu producto esta registrado"
  });
}

modules.exports.createProducts = (req, res) => {
  const { titulo, precio, descripcion } = req.body;
  Products.create({
    titulo,
    precio,
    descripcion,
  })
    .then(products => res.json(products))
    .catch(err => res.json(err));
}

modules.exports.getAllProducts = (req, res) => {
  Products.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

modules.exports.getProduct = (req, res) => {
  console.log('ingresa tu producto')
  Products.findOne({_id:req.params.id})
    .then(products => res.json(products))
    .catch(error => res.json(error))
}

