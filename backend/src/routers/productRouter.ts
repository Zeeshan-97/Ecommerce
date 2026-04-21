import express from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../model/productModel";
export const productRouter = express.Router();

// TODO: Implement product routes /api/products and /api/products/:slug
productRouter.get('/', asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
}));

// Get product by slug
productRouter.get('/slug/:slug', asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}));