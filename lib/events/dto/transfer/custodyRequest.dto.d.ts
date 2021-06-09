import { AddressDTO } from '../../../general';
export declare class TransferCustodyRequestDTO {
    productId: string;
    countryOfDestination: string;
    portOfEntry: AddressDTO;
    portOfDestination: AddressDTO;
    receiptLocation: AddressDTO;
    receiver: string;
    hasDocuments: boolean;
}
