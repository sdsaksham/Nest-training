import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users') // All routes will start with /users
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() body: any) {
    return {
      message: 'User created successfully',
      data: body,
    };
  }

  
  @Get()
  getAllUsers() {
    // throw new InternalServerErrorException(`User with ID not found`);
    return 'Get all users';
  }
  @Get()
  getAllUsersWithQuery(@Query('name') name: string) {
    // throw new InternalServerErrorException(`User with ID not found`);
    return `Hello ${name}`;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `Get user with ID ${id}`;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return {
      message: `User ${id} updated successfully`,
      updatedData: body,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `User with ID ${id} deleted`;
  }
}
