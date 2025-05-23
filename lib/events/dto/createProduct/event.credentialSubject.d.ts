import { EVENT_TYPE } from '../../../events';
import { OrganizationDTO, PlaceDTO } from '../../../general';
export declare class AGENT_CreationEventCredentialSubjectDTO {
    eventType: EVENT_TYPE;
    place: PlaceDTO;
    actor: OrganizationDTO[];
}
export declare class CORE_CreationEventCredentialSubjectDTO extends AGENT_CreationEventCredentialSubjectDTO {
    eventId: string;
    eventTime: string;
    products: string[];
    type: EVENT_TYPE[];
}
