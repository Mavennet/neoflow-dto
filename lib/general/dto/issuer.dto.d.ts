import type { JSON_TYPE } from '../constants';
export declare class IssuerDTO {
    type: JSON_TYPE[];
    id: string;
    logo?: string;
    name?: string;
    taxId?: string;
    url?: string;
    street?: string;
    locality?: string;
    region?: string;
    postalCode?: string;
    country?: string;
    representativeName?: string;
    jobTitle?: string;
    email?: string;
    phoneNumber?: string;
}
