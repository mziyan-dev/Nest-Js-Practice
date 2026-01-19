import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";




@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get("getusers")
  findUser() {
    return this.userService.findOne();
  }

  @Get("getmultipleusers")
  findMultipleUsers() {
    return this.userService.findAllUser();
  }
}