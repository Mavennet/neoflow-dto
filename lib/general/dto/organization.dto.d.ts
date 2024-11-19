import { JSON_TYPE } from '../constants';
import { PostalAddressDTO, COMPACT_PostalAddressDTO } from './postalAddress.dto';
export declare abstract class OrganizationDTO {
    type: JSON_TYPE[];
    name: string;
    description?: string;
    did?: string;
    address?: PostalAddressDTO;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;
}
export declare abstract class COMPACT_OrganizationDTO {
    name: string;
    description?: string;
    did?: string;
    address?: COMPACT_PostalAddressDTO;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;
}
