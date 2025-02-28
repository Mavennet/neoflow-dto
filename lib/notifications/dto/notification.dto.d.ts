import { NOTIFICATION_TYPE } from '../constants';
interface SummaryProduct {
    id: string;
    batchNumber: string;
}
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
    summaryProducts: SummaryProduct[];
}
export {};
