import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  @Post()
  async createProduct() {
    return this.productService.createProduct();
  }


  @Get()
  async GetAllProducts() {
    return this.productService.GetAllProducts();
  }
}
