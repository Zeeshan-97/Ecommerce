import { ModelOptions, prop, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { model } from "mongoose";

modelOptions({ schemaOptions: { collection: "products" } });
export class Product {
    public _id!: string;
    @prop({ required: true })
    name!: string;

    @prop({ required: true, unique: true })
    slug!: string;

    @prop({ required: true })
    category!: string;

    @prop({ required: true })
    image!: string;

    @prop({ required: true, default: 0 })
    price!: number;

    @prop({ required: true, default: 0 })
    countInStock!: number;

    @prop({ required: true })
    brand!: string;

    @prop({ required: true, default: 0 })
    rating!: number;

    @prop({ required: true, default: 0 })
    numReviews!: number;

    @prop({ required: true})
    description!: string;
}

export const ProductModel = getModelForClass(Product);