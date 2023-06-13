import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){
  }
  async create(CreateUserDto:any) {
    this.userRepository.save(CreateUserDto)
    }

  findAll() {
    return this.userRepository.find({


    }
    )
    // return `This action returns all users`;
  }

  findOne(id: any) {
      return this.userRepository.findOne({
        where:
          { id:id }
      
      })
  
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id:id},updateUserDto)
  
  }

  async remove(id: number) {
    return await this.userRepository.softDelete({id:id})
  }
}
