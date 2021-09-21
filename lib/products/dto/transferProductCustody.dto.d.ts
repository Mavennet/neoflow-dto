import { JsonLdContext } from '../../json-ld.context';
import { TransferEventDTO } from '../../events/dto/transferEvent.dto';
export declare class TransferProductCustodyDTO extends JsonLdContext {
    productId: number;
    eventDetails: TransferEventDTO;
    '@type': string;
}
