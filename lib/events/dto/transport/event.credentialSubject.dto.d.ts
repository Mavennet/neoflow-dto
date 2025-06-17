import { JSON_TYPE_NF } from '../../../general';
declare class LocationDTO {
    type: string;
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
}
export declare class TransportEventCredentialSubjectDTO {
    type: JSON_TYPE_NF;
    epcList: string[];
    bizStep: string;
    action: string;
    disposition: string;
    sourceList: LocationDTO[];
    destinationList: LocationDTO[];
    eventTime: string;
    eventId: string;
}
export {};
