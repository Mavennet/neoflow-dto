import { AGENT_InspectionEventCredentialSubjectDTO } from './inspectionEventCredentialSubject.dto';
import { InspectionEventDetailsDTO } from './inspectionEvent.vc.dto';
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
