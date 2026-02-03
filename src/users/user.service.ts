import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./Schemas/user.Schema";


@Injectable()
export class UserService {
   
    constructor(@InjectModel(User.name) private userModel : Model<User>){}
   async createUser(): Promise<User> {
        const newUser = new this.userModel({
            name: 'John Doe',
            address: {
                street: '123 Main St',
                city: 'Anytown'
            }
        });
        return newUser.save()
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}


