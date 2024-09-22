import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoginController } from './login.controller';
import { MailService } from 'src/services/mail.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController,LoginController],
  providers: [UserService,MailService],

})
export class UserModule {}