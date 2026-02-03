import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './Schemas/book.Schema';
import { Library, LibrarySchema } from './Schemas/library.Schema';

@Module({
imports: [
MongooseModule.forFeature([
{ name: Library.name, schema: LibrarySchema },
{ name: Book.name, schema: BookSchema }

])   ],
controllers: [LibraryController],
providers: [LibraryService],

})


export class LibraryModule {}