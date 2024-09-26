"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileuploadService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
let FileuploadService = class FileuploadService {
    getFile(filePath) {
        const fullPath = (0, path_1.join)(process.cwd(), 'uploads', filePath);
        if (!(0, fs_1.existsSync)(fullPath)) {
            throw new common_1.NotFoundException('File not found');
        }
        const stream = (0, fs_1.createReadStream)(fullPath);
        return { stream, filename: filePath };
    }
};
exports.FileuploadService = FileuploadService;
exports.FileuploadService = FileuploadService = __decorate([
    (0, common_1.Injectable)()
], FileuploadService);
//# sourceMappingURL=fileupload.service.js.map