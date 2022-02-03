import { OrganizationDTO } from '../../../general/dto/organization.dto';
import { DELIVERY_MONTH } from '../../constants';
export declare class CreateDeliveryScheduleDTO extends Array {
    batchNumber?: number;
    inBondNumber?: number;
    deliveryTicketNumber?: number;
    estimatedDeliveryMonth?: DELIVERY_MONTH;
    custodian: OrganizationDTO;
}
