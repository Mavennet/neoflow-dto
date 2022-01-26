import { DELIVERY_STATUS } from '../../constants/deliveryStatus';
export declare class CreateDeliveryScheduleDTO extends Array {
    batchNumber?: number;
    inBondNumber?: number;
    deliveryTicketNumber?: number;
    estimatedDeliveryMonth?: string;
    createdAt?: string;
    deliveredAt?: string;
    deliveryStatus: DELIVERY_STATUS;
}
