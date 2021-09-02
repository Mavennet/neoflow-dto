import { PlaceDTO, FLAT_PlaceDTO } from '../../../general';
export declare class FLAT_TransferOwnershipConfirmationDTO {
    transferOwnershipRequestId: number;
    portOfEntry?: FLAT_PlaceDTO;
    portOfDestination?: FLAT_PlaceDTO;
    countryOfDestination?: string;
    confirmationStatus: boolean;
    comment?: string;
    hasDocuments: boolean;
}
export declare class TransferOwnershipConfirmationDTO {
    transferOwnershipRequestId: number;
    portOfEntry?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    countryOfDestination?: string;
    confirmationStatus: boolean;
    comment?: string;
    hasDocuments: boolean;
}
