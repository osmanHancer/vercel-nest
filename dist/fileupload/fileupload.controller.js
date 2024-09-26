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
exports.FileuploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fileupload_service_1 = require("./fileupload.service");
let FileuploadController = class FileuploadController {
    constructor(downloadService) {
        this.downloadService = downloadService;
    }
    async downloadFile(filename, res) {
        try {
            const file = this.downloadService.getFile(filename);
            res.set({
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `attachment; filename="${file.filename}"`,
            });
            file.stream.pipe(res);
        }
        catch (error) {
            res.status(common_1.HttpStatus.NOT_FOUND).json({ message: 'File not found' });
        }
    }
    uploadSingleFileWithPost(file) {
        if (!file) {
            throw new common_1.HttpException('File not provided', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            status: common_1.HttpStatus.OK,
            message: 'File uploaded successfully',
            filename: file.filename,
        };
    }
};
exports.FileuploadController = FileuploadController;
__decorate([
    (0, common_1.Get)(':filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FileuploadController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
                let filename = file.originalname;
                cb(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileuploadController.prototype, "uploadSingleFileWithPost", null);
exports.FileuploadController = FileuploadController = __decorate([
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [fileupload_service_1.FileuploadService])
], FileuploadController);
//# sourceMappingURL=fileupload.controller.js.map