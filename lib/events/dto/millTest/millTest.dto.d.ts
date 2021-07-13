import { MillTestVCDTO } from './event.vc.dto';
import { AGENT_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_MillTestDTO {
    productId: string;
    eventId: string;
    MillTestCredentialSubject: AGENT_MillTestCredentialSubjectDTO;
}
export declare class CORE_MillTestDTO {
    productId: string;
    eventId: string;
    MillTestVC: MillTestVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
