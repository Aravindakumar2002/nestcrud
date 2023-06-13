import { Controller, Get, Post, Body, Param, Delete, Req, Res, HttpStatus, Put } from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto:any,@Req() req:Request,@Res() res:Response) {
    try{
     await this.usersService.create(createUserDto)
      res.status(HttpStatus.OK).json({"message":'create user successfully !'})
      
    }
    catch{
      res.status(HttpStatus.BAD_REQUEST).json({"message":'user not Created !' })

    }
    
  }

  @Get('getall')
  async findAll(@Body() CreateUserDto:any,@Req() req:Request,@Res() res:Response) {
    try{
     let findData=await this.usersService.findAll(
     )
      res.json({"message":"get all successfully !",res:findData})
    }
    catch{
      res.json({"message":"error"})
    }

  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Put('delete/:id')
  async remove(@Param('id') id: number) {
     await this.usersService.remove(+id);
    await this.usersService.update(id,{isActive:0})
  }
}