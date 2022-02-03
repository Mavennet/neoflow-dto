import { OrganizationDTO } from '../../../general/dto/organization.dto';
import { DELIVERY_STATUS, DELIVERY_MONTH } from '../../constants';
export declare class CreateDeliveryScheduleDTO extends Array {
    batchNumber?: number;
    inBondNumber?: number;
    deliveryTicketNumber?: number;
    estimatedDeliveryMonth?: DELIVERY_MONTH;
    createdAt?: string;
    deliveredAt?: string;
    deliveryStatus: DELIVERY_STATUS;
    custodian: OrganizationDTO;
}
