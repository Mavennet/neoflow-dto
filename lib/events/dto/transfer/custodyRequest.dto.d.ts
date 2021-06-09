import { PostalAddressDTO } from '../../../general';
export declare class TransferCustodyRequestDTO {
    productId: string;
    countryOfDestination: string;
    portOfEntry: PostalAddressDTO;
    portOfDestination: PostalAddressDTO;
    receiptLocation: PostalAddressDTO;
    receiver: string;
    hasDocuments: boolean;
}
