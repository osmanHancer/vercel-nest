import { OmitType } from '@nestjs/mapped-types';
//import { CreateDavaDto } from './create-dava.dto';

export class CreateDavaDto {
  dosyaNo: string;
  davaciAdi: string;
  davaliAdi: string;
}

export class UpdateDavaDto extends OmitType(CreateDavaDto, ['dosyaNo']) {}
