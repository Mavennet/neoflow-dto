import { PlaceDTO, Place } from '../../../general';
export declare class TransferCustodyUpdate {
    requestId: string;
    contractId?: string;
    countryOfDestination?: string;
    portOfEntry: Place;
    portOfDestination: Place;
    receiptLocation?: Place;
    receiver: string;
    hasDocuments: boolean;
}
export declare class TransferCustodyUpdateDTO {
    requestId: string;
    contractId?: string;
    countryOfDestination?: string;
    portOfEntry: PlaceDTO;
    portOfDestination: PlaceDTO;
    receiptLocation?: PlaceDTO;
    receiver: string;
    hasDocuments: boolean;
}
