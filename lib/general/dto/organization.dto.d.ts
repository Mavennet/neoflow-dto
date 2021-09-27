import { JSON_TYPE } from '../constants';
import { PostalAddressDTO } from './postalAddress.dto';
export declare class OrganizationDTO {
    type: JSON_TYPE[];
    name: string;
    did?: string;
    description: string;
    address: PostalAddressDTO;
    email: string;
    phoneNumber: string;
    faxNumber: string;
}
export declare abstract class COMPACT_OrganizationDTO {
    name: string;
    description?: string;
    did?: string;
    address?: PostalAddressDTO;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;
}
