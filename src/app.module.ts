import { Global, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomMiddleware } from './middlewares/custom.middleware';
import { FreshModule } from './fresh-module/fresh.module';

@Module({
  imports: [FreshModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMiddleware).forRoutes('*'); // Global
    //app.use(CustomMiddleware); in main.ts 👈 Global middleware
  }
}
