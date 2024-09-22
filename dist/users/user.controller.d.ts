import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { MailService } from 'src/services/mail.service';
export declare class UserController {
    private usersService;
    private readonly mailService;
    constructor(usersService: UserService, mailService: MailService);
    create(createCreateuserDto: UserDTO): Promise<import("./user.entity").UserEntity>;
    updatepassw(createCreateuserDto: any): Promise<{
        hashedPassword: any;
        mail: string;
        name: string;
        surname: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatemail(createCreateuserDto: any): Promise<import("./user.entity").UserEntity>;
    updatename(createCreateuserDto: any): Promise<import("./user.entity").UserEntity>;
    delete(createCreateuserDto: UserDTO): void;
    unkownpasswmail(data: any): Promise<{
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: any;
    }>;
    unkownpassw(data: any): Promise<{
        statusCode: number;
        message: string;
        user: import("./user.entity").UserEntity;
    }>;
    readAllUsers(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: import("./user.entity").UserEntity[];
    }>;
}
