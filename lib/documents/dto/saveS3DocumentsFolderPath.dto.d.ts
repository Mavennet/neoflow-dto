import { UPLOAD_TYPE } from '../constants';
export declare class SaveS3DocumentsFolderPathDTO {
    uploadType: UPLOAD_TYPE[];
    senderS3DocumentsFolderPath: string;
    receiverS3DocumentsFolderPath: string;
    s3DocumentsFolderPath: string;
}
