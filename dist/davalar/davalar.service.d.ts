import { CreateDavalarDto } from './create-davalar.dto';
import { DavalarEntity } from './davalar.entity';
import { Repository } from 'typeorm';
export declare class DavalarService {
    private davaRepository;
    constructor(davaRepository: Repository<DavalarEntity>);
    create(createDavalarDto: CreateDavalarDto): Promise<DavalarEntity>;
    findAll(): Promise<DavalarEntity[]>;
    findOne(mail: string): Promise<DavalarEntity[]>;
    update(id: number, updateDavalarDto: CreateDavalarDto): Promise<DavalarEntity>;
    remove(id: number): Promise<void>;
}
