import { Request } from 'express';
import multer from 'multer';
import fs from 'fs';

const multerConfig = {
    config: {
        storage: multer.diskStorage({
            destination: (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
                const folder = './uploads/images/';
                if (!fs.existsSync(folder)) {
                    fs.mkdirSync(folder);
                }
                callback(null, folder);
            },
            filename: (req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) => {
                const ext = file.mimetype.split('/')[1];
                callback(null, `${file.fieldname}-${Date.now()}.${ext}`);
            }
        }),
        limits: { fileSize: 1024 * 1024 * 5 },
        fileFilter: (req: Request, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
            const image = file.mimetype.startsWith('image/');
            if (image) {
                callback(null, true);
            } else {
                callback(new Error('File type not supported'), false);
            }
        }
    },
    keyUpload: 'photo'
};

export default multerConfig;
