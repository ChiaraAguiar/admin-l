const ProductsController = require('../controllers/product.controller');
modules.exports = (app) => {
    app.get('/api', ProductsController.index);
    app.get('/api/productos', ProductsController.getAllProducts);
    app.get('/api/productos/:id', ProductsController.getaProduct);
    app.post('/api/productos', ProductsController.createnewProduct);
}