import { JSON_TYPE } from '../constants';
import { PostalAddressDTO } from './postalAddress.dto';
export declare class OrganizationDTO {
    type: JSON_TYPE[];
    name: string;
    description: string;
    address: PostalAddressDTO;
    email: string;
    phoneNumber: string;
    faxNumber: string;
}
