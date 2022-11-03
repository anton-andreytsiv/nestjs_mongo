import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { ProductsController } from './products/products.controller';
import { usersModule } from './users/users.module';

@Module({
  imports: [
    usersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.e3vhsr8.mongodb.net/test`),
    
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
