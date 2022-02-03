import { AddressDTO } from '../../../general/dto/address.dto';
import { OrganizationDTO } from '../../../general/dto/organization.dto';
import { DELIVERY_STATUS, DELIVERY_MONTH } from '../../constants';
export declare class CreateDeliveryScheduleDTO extends Array {
    batchNumber?: number;
    inBondNumber?: number;
    deliveryTicketNumber?: number;
    estimatedDeliveryMonth?: DELIVERY_MONTH;
    deliveryStatus: DELIVERY_STATUS;
    custodian: OrganizationDTO;
    address: AddressDTO;
}
