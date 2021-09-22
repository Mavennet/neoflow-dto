import { PlaceDTO } from '../../../general/dto/place.dto';
declare class CreationEventCredentialSubjectDTOBase {
    description: string;
    place: PlaceDTO;
    eventCreator: string;
}
export declare class AGENT_CreationEventCredentialSubjectDTO extends CreationEventCredentialSubjectDTOBase {
    eventId: string;
    productId: string;
}
export declare class CORE_CreationEventCredentialSubjectDTO extends CreationEventCredentialSubjectDTOBase {
    productId: string;
}
export {};
