import { AddressDTO } from '../../general/dto/address.dto';
import { TransferEventDetailsDTO } from '../../events/dto/transferEvent.vc.dto';
export declare class TransferDTO {
    requestId: number;
    productId: string;
    eventId: string;
    eventVC: TransferEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    geo: AddressDTO;
}
