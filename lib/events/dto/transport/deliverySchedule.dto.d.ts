import { AddressDTO } from '../../../general/dto/address.dto';
import { OrganizationDTO } from '../../../general/dto/organization.dto';
import { DELIVERY_MONTH } from '../../constants';
export declare class DeliveryScheduleDTO {
    batchNumber?: string;
    inBondNumber: number;
    deliveryTicketNumber: string;
    deliveredVolume?: number;
    estimatedDeliveryMonth?: DELIVERY_MONTH;
    custodian: OrganizationDTO;
    address: AddressDTO;
}
