"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DavalarService = void 0;
const common_1 = require("@nestjs/common");
const davalar_entity_1 = require("./davalar.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DavalarService = class DavalarService {
    constructor(davaRepository) {
        this.davaRepository = davaRepository;
    }
    async create(createDavalarDto) {
        const dava = this.davaRepository.create(createDavalarDto);
        await this.davaRepository.insert(dava);
        return dava;
    }
    async findAll() {
        const dava = await this.davaRepository.find();
        return dava;
    }
    findOne(mail) {
        const dava = this.davaRepository.find({ where: { mail: mail } });
        return dava;
    }
    async update(id, updateDavalarDto) {
        updateDavalarDto.id = id;
        const dava = this.davaRepository.create(updateDavalarDto);
        await this.davaRepository.save(dava);
        return dava;
    }
    async remove(id) {
        const dava = await this.davaRepository.findOne({ where: { id: id } });
        if (!dava) {
            throw new common_1.NotFoundException(`${id} numaralı dava bulunamadı.`);
        }
        try {
            const result = await this.davaRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`${id} numaralı dava silinemedi.`);
            }
        }
        catch (error) {
            console.error('Silme Hatası:', error);
            throw new common_1.InternalServerErrorException('Dava silinirken bir hata oluştu.');
        }
    }
};
exports.DavalarService = DavalarService;
exports.DavalarService = DavalarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(davalar_entity_1.DavalarEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DavalarService);
//# sourceMappingURL=davalar.service.js.map