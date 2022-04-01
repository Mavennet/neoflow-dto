import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_ObservationDTO } from '../../../general';
import { AGENT_InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { InspectionEventDetailsDTO } from './event.vc.dto';
export declare class AGENT_COMPACT_InspectionDTO {
    initiator: COMPACT_OrganizationDTO;
    place: COMPACT_PlaceDTO;
    observation: COMPACT_ObservationDTO[];
}
export declare class CORE_InspectProductDTO {
    productId: string;
    eventId: string;
    eventVC: InspectionEventDetailsDTO;
    txHash: string;
    txTimestamp: string;
}
export declare class AGENT_InspectProductDTO extends CORE_InspectProductDTO {
    inspectCredentialSubject: AGENT_InspectionEventCredentialSubjectDTO;
}
