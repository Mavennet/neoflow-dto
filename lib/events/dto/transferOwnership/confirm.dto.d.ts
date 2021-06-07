import { AddressDTO } from '../../../general';
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
