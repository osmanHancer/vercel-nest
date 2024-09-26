import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    HttpStatus,
    HttpException,
    Get,
    Res,
    Param,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { FileuploadService } from './fileupload.service';
  import { Response } from 'express';
  
  @Controller('file')
  export class FileuploadController {
    constructor(private readonly downloadService: FileuploadService) { }
  
    @Get(':filename')
    async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
      try {
        const file = this.downloadService.getFile(filename);
        res.set({
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="${file.filename}"`,
        });
        file.stream.pipe(res);
      } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ message: 'File not found' });
      }
    }
  
    @Post('upload')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',  // Dosyaların kaydedileceği dizin
          filename: (req, file, cb) => {
           file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
            let filename = file.originalname;
            cb(null, filename);
          },
        }),
      }),
    )
    uploadSingleFileWithPost(@UploadedFile() file: any) {
      if (!file) {
        throw new HttpException('File not provided', HttpStatus.BAD_REQUEST);
      }
      return {
        status: HttpStatus.OK,
        message: 'File uploaded successfully',
        filename: file.filename,
      };
    }
  }
  