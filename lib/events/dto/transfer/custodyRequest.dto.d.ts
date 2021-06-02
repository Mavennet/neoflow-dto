import { PlaceDTO } from '../../../general';
export declare class TransferCustodyRequestDTO {
    productId: string;
    countryOfDestination: string;
    portOfEntry: PlaceDTO;
    portOfDestination: PlaceDTO;
    receiptLocation: PlaceDTO;
    receiver: string;
    weight: number;
    unit: string;
    hasDocuments: boolean;
}
