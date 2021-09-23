import { JsonLdContext } from '../../../json-ld.context';
import { AGENT_TransferEventDTO } from './transferEvent.dto';
export declare class AGENT_TransferProductCustodyDTO extends JsonLdContext {
    productId: number;
    eventDetails: AGENT_TransferEventDTO;
    '@type': string;
}
