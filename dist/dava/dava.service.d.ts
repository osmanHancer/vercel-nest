import { Repository, UpdateResult } from 'typeorm';
import { Dava } from './entities/dava.entity';
import { CreateDavaDto } from './dto/create-dava.dto';
import { UpdateDavaDto } from './dto/update-dava.dto';
export declare class DavaService {
    private davaRepository;
    constructor(davaRepository: Repository<Dava>);
    create(createDavaDto: CreateDavaDto): Promise<Dava>;
    findAll(): Promise<Dava[]>;
    findOne(id: number): Promise<Dava>;
    update(id: number, updateDavaDto: UpdateDavaDto): Promise<Dava | UpdateResult>;
    remove(id: number): Promise<void>;
}
