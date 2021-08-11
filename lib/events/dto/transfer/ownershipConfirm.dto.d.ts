import { PlaceDTO, Place } from '../../../general';
export declare class TransferOwnershipConfirmation {
    transferOwnershipRequestId: number;
    portOfEntry?: Place;
    portOfDestination?: Place;
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
