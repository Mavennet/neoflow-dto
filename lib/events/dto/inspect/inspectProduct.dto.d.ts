import { InspectionEventCredentialSubjectDTO } from './inspectionEventCredentialSubject.dto';
import { InspectionEventDetailsDTO } from './inspectionEvent.vc.dto';
export declare class InspectProductDTO {
    productId: string;
    eventId: string;
    eventVC: InspectionEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    inspectCredentialSubject: InspectionEventCredentialSubjectDTO;
}
