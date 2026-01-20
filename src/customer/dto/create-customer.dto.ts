import { IsInt } from "class-validator/types/decorator/typechecker/IsInt";
import { IsString } from "class-validator/types/decorator/typechecker/IsString";

export class CreateCustomerDto {
    @IsString()
    name : string;
    @IsInt()
    position : Number;
}
