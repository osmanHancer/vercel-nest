import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';
export declare class UserService {
    private usersRepository;
    delete(createCreateuserDto: UserDTO): void;
    constructor(usersRepository: Repository<UserEntity>);
    create(data: UserDTO): Promise<UserEntity>;
    updatepassw(data: any): Promise<{
        hashedPassword: any;
        mail: string;
        name: string;
        surname: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMail(data: {
        oldMail: string;
        newMail: string;
    }): Promise<UserEntity>;
    updateName(data: {
        mail: string;
        name: string;
        surname: string;
    }): Promise<UserEntity>;
    readAll(): Promise<UserEntity[]>;
    findOne(mail: string, passw: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        user: UserEntity;
    }>;
    unkownPassword(mail: string, newPassword: string): Promise<{
        statusCode: number;
        message: string;
        user: UserEntity;
    }>;
}
