import { PlaceDTO } from '../../../general';
export declare class TransferOwnershipConfirmationDTO {
    transferOwnershipRequestId: number;
    portOfEntry: PlaceDTO;
    portOfDestination: PlaceDTO;
    countryOfDestination?: string;
    confirmationStatus: boolean;
    comment?: string;
    hasDocuments: boolean;
}
