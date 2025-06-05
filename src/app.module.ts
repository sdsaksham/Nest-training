import { Global, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomMiddleware } from './middlewares/custom.middleware';
import { FreshModule } from './fresh-module/fresh.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // optional, but recommended
    }),
    MongooseModule.forRoot(process.env.CONNECTION_URL || ''),
    FreshModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMiddleware).forRoutes('*'); // Global middleware
  }
}
