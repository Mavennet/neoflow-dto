import { COMPACT_PlaceDTO } from '../../../general';
import { AddressDTO } from '../../../general/dto/address.dto';
export declare class COMPACT_TransferOwnershipConfirmationDTO {
    transferOwnershipRequestId: number;
    portOfEntry?: COMPACT_PlaceDTO;
    portOfDestination?: COMPACT_PlaceDTO;
    countryOfDestination?: string;
    confirmationStatus: boolean;
    comment?: string;
    hasDocuments: boolean;
}
export declare class TransferOwnershipConfirmationDTO {
    transferOwnershipRequestId: number;
    portOfEntry: AddressDTO;
    portOfArrival: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    confirmationStatus: boolean;
    comment: string;
    hasDocuments: boolean;
}
