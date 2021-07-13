import { InspectVCDTO } from './event.vc.dto';
import { AGENT_InspectCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_InspectDTO {
    productId: string;
    eventId: string;
    inspectCredentailSubject: AGENT_InspectCredentialSubjectDTO;
}
export declare class CORE_InspectDTO {
    productId: string;
    eventId: string;
    eventVC: InspectVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
