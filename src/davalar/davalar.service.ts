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
    console.log(createDavalarDto);
    const date = new Date(createDavalarDto.baslamaTarihi);
    let hours=date.getHours()-3;
    date.setHours(hours);
    const baslamaTarihi = date.toISOString();
    const dava = this.davaRepository.create(createDavalarDto);
    
    const updateDava = {
      ...dava,
      baslamaTarihi,
    };
    console.log(updateDava);
   
    await this.davaRepository.insert(updateDava);
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
