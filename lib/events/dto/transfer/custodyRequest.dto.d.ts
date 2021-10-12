import { COMPACT_PlaceDTO } from '../../../general';
import { AddressDTO } from '../../../general/dto/address.dto';
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
    portOfEntry: AddressDTO;
    portOfArrival: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    receiptLocation: AddressDTO;
    hasDocuments: boolean;
}
