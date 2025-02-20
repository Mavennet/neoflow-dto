import { NOTIFICATION_TYPE } from '../constants';
export declare abstract class NotificationDTO {
    notificationId: number;
    notificationType: NOTIFICATION_TYPE;
    productId: string;
    batchNumber: string;
    contractId: number;
    transferRequestId: number;
    sender: string;
    senderName: string;
    read: boolean;
    createdAt: Date;
    summaryProducts: string[];
}
