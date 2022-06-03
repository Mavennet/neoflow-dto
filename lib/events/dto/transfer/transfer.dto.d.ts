import { PlaceDTO, OrganizationDTO } from '../../../general';
import { CORE_TransferEventDetailsDTO } from './event.vc.dto';
import { ProductDTO } from '../../../products';
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
    products: ProductDTO[];
    actor: OrganizationDTO[];
}
