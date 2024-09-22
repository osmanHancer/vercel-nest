import { Module } from '@nestjs/common';
import { DavalarService } from './davalar.service';
import { DavalarController } from './davalar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DavalarEntity } from './davalar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DavalarEntity])],
  controllers: [DavalarController],
  providers: [DavalarService],
})
export class DavalarModule { }
