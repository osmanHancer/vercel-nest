import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  async remove(id: number): Promise<void> {
    const dava = await this.davaRepository.findOne({ where: { id: id } });
    if (!dava) {
      throw new NotFoundException(`${id} numaralı dava bulunamadı.`);
    }

    try {
      const result = await this.davaRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`${id} numaralı dava silinemedi.`);
      }
    } catch (error) {
      console.error('Silme Hatası:', error);
      throw new InternalServerErrorException('Dava silinirken bir hata oluştu.');
    }
  }
}
