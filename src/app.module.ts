import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ProductModule } from './product/product.module';
import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { CetegoryModule } from './cetegory/cetegory.module';
import { MynameController } from './myname/myname.controller';
import { UserRoleController } from './user-role/user-role.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { LibraryService } from './library/library.service';
import { LibraryController } from './library/library.controller';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }),
    UserModule, ProductModule, EmployeeModule, CustomerModule, CetegoryModule, MongooseModule.forRoot(process.env.MONGO_URI!), StudentModule, LibraryModule],
  controllers: [AppController, MynameController, UserRoleController, ExceptionController, DatabaseController, EvController, LibraryController],
  providers: [AppService, DatabaseService, EvService, LibraryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');

  }
}
