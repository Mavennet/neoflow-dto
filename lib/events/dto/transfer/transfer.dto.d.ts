import { PlaceDTO } from '../../../general';
import { CORE_TransferEventDetailsDTO } from './event.vc.dto';
export declare class CORE_TransferProductDTO {
    requestId: number;
    productId: string;
    eventId: string;
    eventVC: CORE_TransferEventDetailsDTO;
}
export declare class AGENT_TransferProductDTO {
    requestId: number;
    productId: string;
    place: PlaceDTO;
    portOfEntry?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    receiver: string;
    price: string;
}
