import { Injectable } from "@nestjs/common";


@Injectable()
export class UserService {
    findOne(){
        return "This is User Service"
    }
    findAllUser(){
        return "This are my all users"
    }
}

