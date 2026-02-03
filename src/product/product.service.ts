
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './Schemas/product.Schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async createProduct(): Promise<Product> {
    const product = new this.productModel({
      title: "Gaming Laptop",
      tags: [
        { name: "Electronics" },
        { name: "Computers" },
        { name: "Gaming" }
      ]
    });
    return product.save();
  }

  async GetAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

}
