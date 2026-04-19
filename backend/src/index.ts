import express, { Request , Response } from "express";
import { productSampleData } from "./data";
import cors from "cors";
const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
}));
app.get('/api/products', (req: Request, res: Response) => {
    res.json(productSampleData);
});

app.get('/api/products/:slug', (req: Request, res: Response) => {
    res.json(productSampleData.find(x => x.slug === req.params.slug));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});