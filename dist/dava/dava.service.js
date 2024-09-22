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
exports.DavaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
const dava_entity_1 = require("./entities/dava.entity");
const common_3 = require("@nestjs/common");
let DavaService = class DavaService {
    constructor(davaRepository) {
        this.davaRepository = davaRepository;
    }
    async create(createDavaDto) {
        const newDava = new dava_entity_1.Dava();
        Object.assign(newDava, createDavaDto);
        return await this.davaRepository.save(newDava);
    }
    async findAll() {
        return await this.davaRepository.find();
    }
    async findOne(id) {
        const dava = await this.davaRepository.findOne({ where: { id: id } });
        if (!dava) {
            throw new common_2.NotFoundException(`${id} Numaralı dava bulunamadı.`);
        }
        return dava;
    }
    async update(id, updateDavaDto) {
        const dava = await this.findOne(id);
        if (!dava) {
            throw new common_2.NotFoundException(`${id} Numaralı dava bulunamadı.`);
        }
        Object.assign(dava, updateDavaDto);
        try {
            return await this.davaRepository.save(dava);
        }
        catch (error) {
            console.error('Güncelleme Hatası:', error);
            throw new common_3.InternalServerErrorException('Dava güncellenirken bir hata oluştu.');
        }
    }
    async remove(id) {
        await this.davaRepository.delete(id);
    }
};
exports.DavaService = DavaService;
exports.DavaService = DavaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dava_entity_1.Dava)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DavaService);
//# sourceMappingURL=dava.service.js.map