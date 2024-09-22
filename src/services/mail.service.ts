import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    // Nodemailer transporter konfigürasyonu (örneğin Gmail kullanarak)
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ohancer74@gmail.com', // Gönderen e-posta adresi
        pass: 'gffu qgzy ybek wiet', // E-posta şifresi (2FA varsa uygulama şifresi)
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'ohancer74@gmail.com', // Gönderen e-posta adresi
      to: to, // Alıcı e-posta adresi
      subject: subject, // E-posta konusu
      text: text, // E-posta içeriği
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-posta gönderildi: ', info.response);
    } catch (error) {
      console.error('E-posta gönderme hatası: ', error);
    }
  }
}
