import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { Dava } from './entities/dava.entity';
import { CreateDavaDto } from './dto/create-dava.dto';
import { UpdateDavaDto } from './dto/update-dava.dto';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class DavaService {
  constructor(
    @InjectRepository(Dava)
    private davaRepository: Repository<Dava>,
  ) {}

  async create(createDavaDto: CreateDavaDto): Promise<Dava> {
    const newDava = new Dava();
    Object.assign(newDava, createDavaDto);
    return await this.davaRepository.save(newDava);
  }

  async findAll(): Promise<Dava[]> {
    return await this.davaRepository.find();
  }

  async findOne(id: number): Promise<Dava> {
    const dava = await this.davaRepository.findOne({where:{id:id}});
    if (!dava) {
      throw new NotFoundException(`${id} Numaralı dava bulunamadı.`);
    }
    return dava;
  }

  async update(
    id: number,
    updateDavaDto: UpdateDavaDto,
  ): Promise<Dava | UpdateResult> {
    const dava = await this.findOne(id);

    if (!dava) {
      throw new NotFoundException(`${id} Numaralı dava bulunamadı.`);
    }

    Object.assign(dava, updateDavaDto);
    try {
      return await this.davaRepository.save(dava);
    } catch (error) {
      console.error('Güncelleme Hatası:', error);
      throw new InternalServerErrorException(
        'Dava güncellenirken bir hata oluştu.',
      );
    }
  }

  async remove(id: number): Promise<void> {
    await this.davaRepository.delete(id);
  }
}
