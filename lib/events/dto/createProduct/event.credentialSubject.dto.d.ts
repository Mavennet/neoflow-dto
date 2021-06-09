import { PlaceDTO, JSON_TYPE_METAL } from '../../../general';
declare class EventCreateCredentialSubjectDTOBase {
    description?: string;
    place: PlaceDTO;
    eventCreator: string;
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
