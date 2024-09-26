import { Injectable, NotFoundException } from '@nestjs/common';
import { createReadStream, existsSync, readFileSync } from 'fs';
import { join } from 'path';
@Injectable()
export class FileuploadService {
  getFile(filePath: string): { stream: NodeJS.ReadableStream, filename: string } {
    const fullPath = join(process.cwd(), 'uploads', filePath);
    if (!existsSync(fullPath)) {
      throw new NotFoundException('File not found');
    }

    const stream = createReadStream(fullPath);
    return { stream, filename: filePath };
  }
}
