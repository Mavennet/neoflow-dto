import { JSON_TYPE } from '../constants';
export declare abstract class PostalAddressDTO {
    type: JSON_TYPE.POSTAL_ADDRESS;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
}
export declare abstract class COMPACT_PostalAddressDTO {
    organizationName?: string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
}
