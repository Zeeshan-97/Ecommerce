import express, { Request , Response } from "express";
import { productSampleData } from "./data";
import cors from "cors";
import dotenv from "dotenv";
import { mongoose } from "@typegoose/typegoose";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ecommerce";
mongoose.set("strictQuery", true);
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
}));
// app.get('/api/products', (req: Request, res: Response) => {
//     res.json(productSampleData);
// });

// app.get('/api/products/:slug', (req: Request, res: Response) => {
//     res.json(productSampleData.find(x => x.slug === req.params.slug));
// });

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});