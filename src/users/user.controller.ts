import { Controller, Get } from "@nestjs/common";




@Controller('users')
export class UserController {
    constructor() { }

    @Get("getusers")
    findUser() {
  return "hry This is my Users"
    }

     @Get("getmultipleusers")
    findMultipleUsers() {
  return "hry This is my Multiple Users"
    }
}