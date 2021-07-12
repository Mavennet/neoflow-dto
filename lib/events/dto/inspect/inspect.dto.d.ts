import { InspectVCDTO } from './event.vc.dto';
import { AGENT_InspectCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_InspectDTO {
    productId: string;
    eventId: string;
    addEntryDetailsCredentialSubject: AGENT_InspectCredentialSubjectDTO;
}
export declare class CORE_InspectDTO {
    productId: string;
    eventId: string;
    addEntryDetailsVC: InspectVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
