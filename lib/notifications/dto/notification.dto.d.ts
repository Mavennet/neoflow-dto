import { NOTIFICATION_TYPE } from '../constants/notificationType';
export declare class NotificationDTOBase {
    notificationId: number;
    notificationType: NOTIFICATION_TYPE;
    productId: string;
    contractId: number;
    transferRequestId: number;
    sender: string;
    read: boolean;
    createdAt: Date;
}
export declare class NotificationDTO extends NotificationDTOBase {
    senderName: string;
}
