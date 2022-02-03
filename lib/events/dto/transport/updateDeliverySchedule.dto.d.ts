import { OrganizationDTO } from '../../../general/dto/organization.dto';
import { AddressDTO } from '../../../general/dto/address.dto';
export declare class UpdateDeliveryScheduleDTO extends Array {
    batchNumber?: number;
    inBondNumber?: number;
    deliveryTicketNumber?: number;
    custodian: OrganizationDTO;
    address: AddressDTO;
}
