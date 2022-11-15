import { COMPACT_PlaceDTO } from '../../../general';
import { PlaceDTO } from '../../../general/dto';
export declare class COMPACT_TransferCustodyUpdateDTO {
    requestId: string;
    contractId?: string;
    countryOfDestination?: string;
    portOfEntry: COMPACT_PlaceDTO;
    portOfDestination: COMPACT_PlaceDTO;
    receiptLocation?: COMPACT_PlaceDTO;
    receiver: string;
    hasDocuments: boolean;
}
export declare class UpdateTransferCustodyRequestDTO {
    requestId: number;
    receiver: string;
    portOfEntry?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    hasDocuments: boolean;
}
