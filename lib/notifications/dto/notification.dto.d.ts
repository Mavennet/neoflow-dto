import { NOTIFICATION_TYPE } from '../constants/notificationType';
export declare class NotificationDTO {
    notificationId: number;
    notificationType: NOTIFICATION_TYPE;
    productId: string;
    contractId: number;
    transferRequestId: number;
    sender: string;
    senderName: string;
    read: boolean;
    createdAt: Date;
}
