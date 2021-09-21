import { JSON_TYPE } from '../constants';
export declare class PostalAddressDTO {
    type: JSON_TYPE[];
    organizationName: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
}
