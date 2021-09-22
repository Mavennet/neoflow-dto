import { JsonLdContext } from '../../../json-ld.context';
import { TransferEventDTO } from './transferEvent.dto';
export declare class TransferProductCustodyDTO extends JsonLdContext {
    productId: number;
    eventDetails: TransferEventDTO;
    '@type': string;
}
