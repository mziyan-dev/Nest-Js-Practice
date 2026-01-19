
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

  private products = [
    { id: 1, name: 'Mobile', price: 10.000 },
    { id: 2, name: 'watch', price: 1500 },
    { id: 3, name: 'Wallet', price: 2000 },
  ]
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  // findAll() {
  //   return `This action returns all product`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
