import { PlaceDTO, FLAT_PlaceDTO } from '../../../general';
export declare class FLAT_TransferCustodyRequestDTO {
    productId: string;
    contractId?: string;
    countryOfDestination?: string;
    portOfEntry: FLAT_PlaceDTO;
    portOfDestination: FLAT_PlaceDTO;
    receiptLocation?: FLAT_PlaceDTO;
    receiver: string;
    hasDocuments: boolean;
}
export declare class TransferCustodyRequestDTO {
    productId: string;
    contractId?: string;
    countryOfDestination?: string;
    portOfEntry: PlaceDTO;
    portOfDestination: PlaceDTO;
    receiptLocation?: PlaceDTO;
    receiver: string;
    hasDocuments: boolean;
}
