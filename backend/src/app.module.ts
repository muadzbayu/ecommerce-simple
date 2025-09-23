import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost', // nanti sesuai service docker-compose
      host: 'host.docker.internal',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'ecommerce',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
