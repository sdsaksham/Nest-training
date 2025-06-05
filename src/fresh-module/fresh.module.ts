import { Module } from '@nestjs/common';
import { FreshController } from './fresh.controller';
import { AppService } from 'src/app.service';


@Module({
  imports: [],
  controllers: [FreshController],
  providers: [AppService],
})
export class FreshModule {}
