import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
export declare class LoginController {
    private readonly userService;
    constructor(userService: UserService);
    login(loginData: {
        mail: string;
        hashedPassword: string;
    }): Promise<{
        statusCode: HttpStatus;
        message: string;
        user: import("./user.entity").UserEntity;
    }>;
}
