import { AddressDTO } from '../../../general';
import { TransferEventVCDTO } from './event.vc.dto';
export declare class AGENT_TransferOwnershipDTO {
    requestId: number;
    eventId: string;
    geo: AddressDTO;
}
export declare class CORE_TransferOwnershipDTO {
    requestId: number;
    productId: string;
    eventId: string;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    eventVC: TransferEventVCDTO;
}
