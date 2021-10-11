import { AGENT_InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { InspectionEventDetailsDTO } from './event.vc.dto';
export declare class CORE_InspectProductDTO {
    productId: string;
    eventId: string;
    eventVC: InspectionEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
export declare class AGENT_InspectProductDTO extends CORE_InspectProductDTO {
    inspectCredentialSubject: AGENT_InspectionEventCredentialSubjectDTO;
}
