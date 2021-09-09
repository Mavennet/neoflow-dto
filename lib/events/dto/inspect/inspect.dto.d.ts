import { InspectVCDTO } from './event.vc.dto';
import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_ObservationDTO } from '../../../general';
import { AGENT_InspectCredentialSubjectDTO } from './event.credentialSubject.dto';
import { ProductBrief } from '../../../products';
export declare class AGENT_COMPACT_InspectionDTO {
    initiator: COMPACT_OrganizationDTO;
    place: COMPACT_PlaceDTO;
    product: ProductBrief;
    observation: COMPACT_ObservationDTO[];
}
export declare class AGENT_InspectDTO {
    productId: string;
    eventId: string;
    inspectCredentialSubject: AGENT_InspectCredentialSubjectDTO;
}
export declare class CORE_InspectDTO {
    productId: string;
    eventId: string;
    eventVC: InspectVCDTO;
    eventVCHash: string;
}
