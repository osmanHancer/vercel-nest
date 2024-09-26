import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { MailService } from 'src/services/mail.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService, private readonly mailService: MailService) { }


  @Post("/insert")
  create(@Body() createCreateuserDto: UserDTO) {

    return this.usersService.create(createCreateuserDto);

  }
  @Post("/update/passw")
  updatepassw(@Body() createCreateuserDto: any) {

    return this.usersService.updatepassw(createCreateuserDto);

  }
  @Post("/update/mail")
  updatemail(@Body() createCreateuserDto: any) {
    console.log(createCreateuserDto);
    return this.usersService.updateMail(createCreateuserDto);

  }
  @Post("/update/name")
  updatename(@Body() createCreateuserDto: any) {
    console.log(createCreateuserDto);
    return this.usersService.updateName(createCreateuserDto);

  }

  @Post("/delete")
  delete(@Body() createCreateuserDto: UserDTO) {

    return this.usersService.delete(createCreateuserDto);

  }
  @Post('unknown-password-mail')
  async unkownpasswmail(@Body() data: any) {

    let user =await this.usersService.findmail(data.email)
    if(user){
    const subject = 'Şifre Sıfırlama Kodunuz';
    try {
      await this.mailService.sendEmail(data.email, subject, data.text);
      return { message: 'Şifre sıfırlama e-postası gönderildi.' };
    } catch (error) {
      return { message: 'E-posta gönderilemedi.', error };
    }
    
  }
  else{
    return {
      message: 'Kullanıcı Bulunamdı',
    };
  }
  }
  @Post('unknown-password')
  async unkownpassw(@Body() data: any) {
    console.log(data);
    return this.usersService.unkownPassword(data.mail, data.newpassw);

  }
  @Post('img')
  async img(@Body() data: any) {
    console.log(data);
    return this.usersService.imgName(data);

  }

  @Get()
  async readAllUsers() {
    const users = await this.usersService.readAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }



  // @Delete(':id')
  // async deleteUser(@Param('id') id: number) {
  //   await this.usersService.delete(id);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'User deleted successfully',
  //   };
  // }
}