import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){

    }
    async addUser(user: userDto): Promise<User>{
        const newUser = new this.userModel(user)
        return newUser.save()
    }

    async getAll(): Promise<User[]>{
        return await this.userModel.find().exec()
    }

}
