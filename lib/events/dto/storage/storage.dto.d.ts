import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { CORE_StorageEventDetailsDTO, AGENT_StorageEventDetailsDTO } from './event.vc.dto';
export declare class CORE_StorageProductDTO {
    productId: string;
    eventId: string;
    eventVC: CORE_StorageEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
export declare class AGENT_StorageProductDTO extends CORE_StorageProductDTO {
    eventVC: AGENT_StorageEventDetailsDTO;
    productHash: string;
    storageCredentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
