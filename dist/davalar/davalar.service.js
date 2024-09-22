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
        console.log(createDavalarDto);
        const date = new Date(createDavalarDto.baslamaTarihi);
        let hours = date.getHours() - 6;
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
    remove(id) {
        return `This action removes a #${id} davalar`;
    }
};
exports.DavalarService = DavalarService;
exports.DavalarService = DavalarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(davalar_entity_1.DavalarEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DavalarService);
//# sourceMappingURL=davalar.service.js.map