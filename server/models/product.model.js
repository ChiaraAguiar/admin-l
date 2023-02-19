const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    titulo: { type: String },
    precio: { type: Number },
    descripcion: { type: String }
}, { timestamps: true });

modules.exports.Products = mongoose.models('Products', ProductSchema);

