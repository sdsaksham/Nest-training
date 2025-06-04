import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CustomDto } from 'src/dtos/custom.dto';

@Controller('fresh')
export class FreshController {
  constructor(private appService: AppService) {}
  @Get()
  defaultGet() {
    return 'Add any query';
  }
  @UsePipes(
    new ValidationPipe({
      transform: false,
      whitelist: true, //remove non listed keys
      forbidNonWhitelisted: true, //works only with whitelist & used to throw error for non listed keys
    }),
  )
  @Post('query')
  getUsersByName(
    @Body('res') body: CustomDto,
    @Query('age', ParseIntPipe) age?: number,
  ) {
    console.log(typeof age);

    return body;
  }
}
