import express from "express";
import asyncHandler from "express-async-handler";
import { productSampleData } from "../data";
import { ProductModel } from "../model/productModel";

export const seedRouter = express.Router();


seedRouter.get('/', asyncHandler(async (req, res) => {
    await ProductModel.deleteMany({});
    const createdProducts = await ProductModel.insertMany(productSampleData);
    res.json(createdProducts);
}));