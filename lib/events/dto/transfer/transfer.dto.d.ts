import { AddressDTO } from '../../../general/dto/address.dto';
import { CORE_TransferEventDetailsDTO } from './event.vc.dto';
export declare class CORE_TransferProductDTO {
    requestId: number;
    productId: string;
    eventId: string;
    eventVC: CORE_TransferEventDetailsDTO;
}
export declare class AGENT_TransferProductDTO {
    requestId: number;
    eventId: string;
    productId: string;
    geo: AddressDTO;
    portOfEntry?: AddressDTO;
    portOfArrival?: AddressDTO;
    portOfDestination?: AddressDTO;
    countryOfDestination?: string;
    receiptLocation?: AddressDTO;
    receiver: string;
    price: string;
}
