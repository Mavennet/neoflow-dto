import { NOTIFICATION_TYPE } from '../constants/notificationType';
export declare class AGENT_NotificationDTO {
    notificationId: number;
    notificationType: NOTIFICATION_TYPE;
    productId: string;
    contractId: number;
    transferRequestId: number;
    sender: string;
    read: boolean;
    createdAt: Date;
}
export declare class CORE_NotificationDTO extends AGENT_NotificationDTO {
    senderName: string;
}
