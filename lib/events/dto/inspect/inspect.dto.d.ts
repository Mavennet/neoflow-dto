import { InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { InspectionEventDetailsDTO } from './event.vc.dto';
export declare class CORE_InspectProductDTO {
    productId: string;
    eventId: string;
    eventVC: InspectionEventDetailsDTO;
}
export declare class AGENT_InspectProductDTO {
    productId: string;
    inspectCredentialSubject: InspectionEventCredentialSubjectDTO;
}
