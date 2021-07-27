import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { StorageEventVCDTO } from './event.vc.dto';
import { EVENT_TYPE } from '../../constants';
export declare class AGENT_StorageProductDTO {
    eventType: EVENT_TYPE;
    eventId: string;
    credentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
export declare class CORE_StorageProductDTO {
    productId: string;
    eventId: string;
    eventVC: StorageEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
