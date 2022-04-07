import { EVENT_TYPE } from '../../constants/eventType';
import { AddressDTO } from '../../../general/dto/address.dto';
export declare class AGENT_TransferEventDTO {
    eventName: EVENT_TYPE;
    timestamp: string;
    address: string;
    latitude: string;
    longitude: string;
    eventSubmitter: string;
    price: string;
    sender: string;
    receiver: string;
    portOfArrival: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    receiptLocation?: AddressDTO;
}
