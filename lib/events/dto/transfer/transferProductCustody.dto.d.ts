import { JsonLdContext } from '../../../json-ld.context';
import { TransferEventDTO } from './event.dto';
export declare class AGENT_TransferProductCustodyDTO extends JsonLdContext {
    productId: number;
    eventDetails: TransferEventDTO;
    '@type': string;
}
