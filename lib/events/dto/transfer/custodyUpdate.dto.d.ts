import { AddressDTO } from '../../../general/dto/address.dto';
export declare class UpdateTransferCustodyRequestDTO {
    requestId: number;
    receiver: string;
    portOfEntry: AddressDTO;
    portOfArrival: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    receiptLocation: AddressDTO;
    hasDocuments: boolean;
}
