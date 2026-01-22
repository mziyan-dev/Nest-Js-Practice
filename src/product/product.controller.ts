import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { last } from 'rxjs';
import { maxHeaderSize } from 'http';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
    @Get()
    @UseGuards(AuthGuard)
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }
  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
    // return this.productService.create(createProductDto);
  // }

  // @Get()
  // findAll() {
  //   return this.productService.findAll();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }

}
