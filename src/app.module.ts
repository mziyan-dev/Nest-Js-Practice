import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ProductModule } from './product/product.module';
import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { CetegoryModule } from './cetegory/cetegory.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [UserModule, ProductModule, EmployeeModule, CustomerModule, CetegoryModule],
  controllers: [AppController, MynameController],
  providers: [AppService],
})
export class AppModule {}
