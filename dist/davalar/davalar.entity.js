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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DavalarEntity = void 0;
const typeorm_1 = require("typeorm");
let DavalarEntity = class DavalarEntity {
};
exports.DavalarEntity = DavalarEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DavalarEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "esasNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "mail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciVekilAdi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciVekilSoyadi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciVekilTc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciVekilAdres", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciAdi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciSoyadi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciTc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciAdresi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciIletisim", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaciMeslegi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliVekilAdi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliVekilSoyadi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliVekilTc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliVekilAdres", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliAdi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliSoyadi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliTc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliAdresi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliIletisim", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "davaliMeslegi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "genelBilgiler", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "mahkemeAsamasi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "il", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "ilce", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "gorevliMahkeme", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DavalarEntity.prototype, "baslamaTarihi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], DavalarEntity.prototype, "durusmaTarihi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DavalarEntity.prototype, "notlar", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], DavalarEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], DavalarEntity.prototype, "createdAt", void 0);
exports.DavalarEntity = DavalarEntity = __decorate([
    (0, typeorm_1.Entity)('Davalar')
], DavalarEntity);
//# sourceMappingURL=davalar.entity.js.map