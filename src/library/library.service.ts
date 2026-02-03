import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './Schemas/book.Schema';
import { Model } from 'mongoose';
import { Library } from './Schemas/library.Schema';

@Injectable()
export class LibraryService {
    constructor(
     @InjectModel(Book.name) private readonly bookModel: Model<Book>,
     @InjectModel(Library.name) private readonly libraryModel: Model<Library>
    ) {}

   async createLibrary(): Promise<Library> {
       const book1 = this.bookModel.create({ 
        title: 'JS Book',
        author: 'John Doe',
    });
     const book2 = this.bookModel.create({ 
        title: 'Python Book',
        author: 'Jane Smith',
    });
   const library = new this.libraryModel({
        name: 'City Library',   
        books: [(await book1)._id, (await book2)._id],
   });
   return library.save();
   } 
   
   async getLibrary(): Promise<Library[]> {
       return this.libraryModel.find().populate('books');
   }

    }



