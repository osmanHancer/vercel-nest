import { DavalarService } from './davalar.service';
import { CreateDavalarDto } from './create-davalar.dto';
export declare class DavalarController {
    private readonly davalarService;
    constructor(davalarService: DavalarService);
    create(createDavalarDto: CreateDavalarDto): Promise<import("./davalar.entity").DavalarEntity>;
    findAll(): Promise<import("./davalar.entity").DavalarEntity[]>;
    findOne(mail: string): Promise<import("./davalar.entity").DavalarEntity[]>;
    update(id: string, updateDavalarDto: CreateDavalarDto): Promise<import("./davalar.entity").DavalarEntity>;
    remove(id: string): string;
}
