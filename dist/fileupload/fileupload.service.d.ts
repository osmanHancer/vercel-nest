/// <reference types="node" />
export declare class FileuploadService {
    getFile(filePath: string): {
        stream: NodeJS.ReadableStream;
        filename: string;
    };
}
