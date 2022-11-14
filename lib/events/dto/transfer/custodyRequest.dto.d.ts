import { PlaceDTO, COMPACT_PlaceDTO } from '../../../general';
export declare class COMPACT_TransferCustodyRequestDTO {
    productId: string;
    contractId?: string;
    countryOfDestination?: string;
    portOfEntry: COMPACT_PlaceDTO;
    portOfDestination: COMPACT_PlaceDTO;
    receiptLocation?: COMPACT_PlaceDTO;
    receiver: string;
    hasDocuments: boolean;
}
export declare class TransferCustodyRequestDTO {
    productId: string;
    receiver: string;
    portOfEntry?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    hasDocuments: boolean;
}
