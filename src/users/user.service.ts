import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UserDTO } from './user.dto';
import { use } from 'passport';

@Injectable()
export class UserService {
  delete(createCreateuserDto: UserDTO) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) { }

  async create(data: UserDTO) {
    try {

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.hashedPassword, saltRounds);

      const user = this.usersRepository.create({
        ...data,
        hashedPassword,
      });

      await this.usersRepository.insert(user);
      return user;
    } catch (error) {
      if (error instanceof QueryFailedError && error.message.includes('Duplicate')) {
        throw new Error('Bu e-posta zaten kullanılıyor.');
      }
      throw new Error('Kayıt sırasında bir hata oluştu.');
    }
  }
  async updatepassw(data: any) {

    const user = await this.usersRepository.findOne({ where: { mail: data.mail } });

    if (!user) {
      throw new Error('Kullanıcı bulunamadı.');
    }

    const isMatch = await bcrypt.compare(data.oldPassword, user.hashedPassword);

    if (!isMatch) {
      throw new Error('Eski parola hatalı.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.hashedPassword, saltRounds);

    const updatedUser = {
      ...user,
      hashedPassword,
    };

    await this.usersRepository.save(updatedUser);

    return updatedUser;
  }
  async updateMail(data: { oldMail: string, newMail: string }) {


    await this.usersRepository.update(
      { mail: data.oldMail },
      {
        mail: data.newMail,
      },
    );

    // Güncellenen kullanıcıyı geri döndür
    const updatedUser = await this.usersRepository.findOne({
      where: { mail: data.newMail }, // Yeni mail ile kullanıcıyı getir
    });

    return updatedUser;
  }
  async updateName(data: { mail: string, name: string, surname: string }) {
    // E-posta adresine göre kullanıcıyı bul
    const user = await this.usersRepository.findOne({ where: { mail: data.mail } });

    if (!user) {
      throw new Error('Kullanıcı bulunamadı.');
    }

    // Kullanıcının adını ve soyadını güncelle
    user.name = data.name;
    user.surname = data.surname;

    // Güncellenen kullanıcıyı kaydet
    await this.usersRepository.save(user);

    return user;
  }
  async imgName(data: { mail: string, imgname: string }) {
    // E-posta adresine göre kullanıcıyı bul
    const user = await this.usersRepository.findOne({ where: { mail: data.mail } });

    if (!user) {
      throw new Error('Kullanıcı bulunamadı.');
    }

    // Kullanıcının adını ve soyadını güncelle
    user.imgname = data.imgname;

    // Güncellenen kullanıcıyı kaydet
    await this.usersRepository.save(user);

    return user;
  }

  async readAll() {

    return await this.usersRepository.find();
  }

  async findOne(mail: string, passw: string) {

    const user = await this.usersRepository.findOne({ where: { mail } });
    if (!user) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Kullanıcı Bulunamdı',
        user,
      };
    }

    const isMatch = await bcrypt.compare(passw, user.hashedPassword);

    if (!isMatch) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Şifre Yanlış',
        user,
      };
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Login successful',
      user,
    };
  }

  async unkownPassword(mail: string, newPassword: string) {
    const user = await this.usersRepository.findOne({ where: { mail } });

    if (!user) {
      throw new Error('Kullanıcı bulunamadı.');
    }

    // Yeni şifreyi hashle
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Kullanıcının şifresini güncelle
    user.hashedPassword = hashedPassword;

    // Veritabanında güncelle
    await this.usersRepository.save(user);

    return {
      statusCode: 200,
      message: 'Şifre başarıyla güncellendi',
      user,
    };
  }

 async findmail(mail:string){

  const user = await this.usersRepository.findOne({ where: { mail } });

  return user!=null ? true:false;

  }


}