import { AddressDTO } from '../../../general/dto/address.dto';
import { CORE_TransferEventDetailsDTO } from './transferEvent.vc.dto';
export declare class CORE_TransferProductDTO {
    requestId: number;
    productId: string;
    eventId: string;
    eventVC: CORE_TransferEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
export declare class AGENT_TransferProductDTO extends CORE_TransferProductDTO {
    geo: AddressDTO;
}
