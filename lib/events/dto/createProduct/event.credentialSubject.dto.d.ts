import { PlaceDTO, JSON_TYPE_METAL, OrganizationDTO } from '../../../general';
import { EVENT_TYPE } from '../../constants';
declare class EventCreateCredentialSubjectDTOBase {
    eventType: EVENT_TYPE;
    description?: string;
    place: PlaceDTO;
    eventCreator: string;
    initiator: OrganizationDTO;
}
export declare class AGENT_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
    eventId: string;
    productId: string;
}
export declare class CORE_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
    '@context': string[];
    type: Array<JSON_TYPE_METAL>;
    eventId: string;
    productId: string;
}
export {};
