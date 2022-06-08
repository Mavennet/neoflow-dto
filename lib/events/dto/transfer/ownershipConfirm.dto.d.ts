import { COMPACT_PlaceDTO, PlaceDTO } from '../../../general';
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
    portOfEntry: PlaceDTO;
    portOfArrival: PlaceDTO;
    portOfDestination: PlaceDTO;
    countryOfDestination: string;
    confirmationStatus: boolean;
    comment: string;
    hasDocuments: boolean;
}
