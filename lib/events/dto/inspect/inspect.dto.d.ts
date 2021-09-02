import { InspectVCDTO } from './event.vc.dto';
import { FLAT_OrganizationDTO, FLAT_PlaceDTO, FLAT_ObservationDTO } from '../../../general';
import { AGENT_InspectCredentialSubjectDTO } from './event.credentialSubject.dto';
import { ProductBrief } from '../../../products';
export declare class AGENT_FLAT_InspectionDTO {
    initiator: FLAT_OrganizationDTO;
    place: FLAT_PlaceDTO;
    product: ProductBrief;
    observation: FLAT_ObservationDTO[];
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
    txHash: string;
    txTimestamp: string;
}
