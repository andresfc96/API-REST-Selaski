import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id/messages')
  findMessages(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findMessages(id);
  }
} 