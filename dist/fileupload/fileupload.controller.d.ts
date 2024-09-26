import { HttpStatus } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { Response } from 'express';
export declare class FileuploadController {
    private readonly downloadService;
    constructor(downloadService: FileuploadService);
    downloadFile(filename: string, res: Response): Promise<void>;
    uploadSingleFileWithPost(file: any): {
        status: HttpStatus;
        message: string;
        filename: any;
    };
}
