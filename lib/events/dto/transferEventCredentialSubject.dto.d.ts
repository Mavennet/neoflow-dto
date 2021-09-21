import { AddressDTO } from '../../general/dto/address.dto';
import { TRANSFER_EVENT_TYPE } from '../constants';
export declare class TransferEventCredentialSubjectDTO {
    eventId: string;
    productId: string;
    eventType: TRANSFER_EVENT_TYPE;
    description: string;
    geo: AddressDTO;
    eventCreator: string;
    sender: string;
    receiver: string;
    price: string;
    portOfEntry: AddressDTO;
    portOfArrival: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    receiptLocation: AddressDTO;
}
