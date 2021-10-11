import { AddressDTO } from '../../../general/dto/address.dto';
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
