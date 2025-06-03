import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('fresh')
export class FreshController {
  constructor(private appService: AppService) {}
  @Get()
  defaultGet() {
    return 'Add any query';
  }
  @Get('name')
  getUsersByName(@Query('first') first?: string, @Query('last') last?: string) {
    if (first && last) {
      this.appService.console();
      return `Full name: ${first} ${last}`;
    } else if (first) {
      return `First name: ${first}`;
    } else if (last) {
      return `Last name: ${last}`;
    } else {
      return 'No name provided';
    }
  }
}
