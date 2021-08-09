import { PlaceDTO } from '../../../general';
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
