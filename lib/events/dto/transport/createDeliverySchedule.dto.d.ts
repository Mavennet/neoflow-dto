import { OrganizationDTO } from '../../../general/dto/organization.dto';
import { DELIVERY_MONTH } from '../../constants';
export declare class CreateDeliveryScheduleDTO {
    batchNumber?: number;
    inBondNumber?: number;
    deliveryTicketNumber?: number;
    estimatedDeliveryMonth?: DELIVERY_MONTH;
    custodian: OrganizationDTO;
    deliverySchedules: CreateDeliveryScheduleDTO[];
}
