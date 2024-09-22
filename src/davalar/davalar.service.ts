import { Injectable } from '@nestjs/common';
import { CreateDavalarDto } from './create-davalar.dto';
import { DavalarEntity } from './davalar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DavalarService {

  constructor(

    @InjectRepository(DavalarEntity)
    private davaRepository: Repository<DavalarEntity>
  ) { }

  async create(createDavalarDto: CreateDavalarDto) {
   
    const dava = this.davaRepository.create(createDavalarDto);
    await this.davaRepository.insert(dava);
    return dava;
  }

  async findAll() {
    const dava =  await this.davaRepository.find();
    return dava;
  }

  findOne(mail: string) {
    const dava = this.davaRepository.find({where:{mail:mail}});

    return dava;
  }

  async update(id: number, updateDavalarDto: CreateDavalarDto) {
    updateDavalarDto.id=id;
    const dava = this.davaRepository.create(updateDavalarDto);
    await this.davaRepository.save(dava);
    return dava;

  }

  remove(id: number) {
    return `This action removes a #${id} davalar`;
  }
}
