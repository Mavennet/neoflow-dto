import { InspectVCDTO } from './event.vc.dto';
import { Organization, Place, Observation } from '../../../general';
import { AGENT_InspectCredentialSubjectDTO } from './event.credentialSubject.dto';
import { ProductBrief } from '../../../products';
export declare class Inspection {
    initiator: Organization;
    place: Place;
    product: ProductBrief;
    observation: Observation[];
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
