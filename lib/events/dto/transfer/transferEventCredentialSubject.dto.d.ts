import { AddressDTO } from '../../../general/dto/address.dto';
import { TRANSFER_EVENT_TYPE } from '../../constants';
export declare class CORE_TransferEventCredentialSubjectDTO {
    productId: string;
    eventType: TRANSFER_EVENT_TYPE;
    description: string;
    geo: AddressDTO;
    eventCreator: string;
    sender: string;
    receiver: string;
    price: string;
    portOfArrival: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    receiptLocation: AddressDTO;
}
export declare class AGENT_TransferEventCredentialSubjectDTO extends CORE_TransferEventCredentialSubjectDTO {
    eventId: string;
    portOfEntry: AddressDTO;
}
