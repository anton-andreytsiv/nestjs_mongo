import { Body, Controller, Get, Post } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { User } from './schemas/users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService){}
@Get()
   async findAll():  Promise<User[]> {
    return await this.usersService.getAll()
  }

@Get('env')
getById(): string{
    return process.env.DB_PASSWORD
}

@Post()
async create(@Body() user: userDto){
    return this.usersService.addUser(user)
}
}
