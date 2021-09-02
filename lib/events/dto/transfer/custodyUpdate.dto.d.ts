import { PlaceDTO, FLAT_PlaceDTO } from '../../../general';
export declare class FLAT_TransferCustodyUpdateDTO {
    requestId: string;
    contractId?: string;
    countryOfDestination?: string;
    portOfEntry: FLAT_PlaceDTO;
    portOfDestination: FLAT_PlaceDTO;
    receiptLocation?: FLAT_PlaceDTO;
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
