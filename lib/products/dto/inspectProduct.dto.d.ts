import { InspectionEventCredentialSubjectDTO } from '../../events/dto/inspectionEventCredentialSubject.dto';
import { InspectionEventDetailsDTO } from '../../events/dto/inspectionEvent.vc.dto';
export declare class InspectProductDTO {
    productId: string;
    eventId: string;
    eventVC: InspectionEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    inspectCredentialSubject: InspectionEventCredentialSubjectDTO;
}
