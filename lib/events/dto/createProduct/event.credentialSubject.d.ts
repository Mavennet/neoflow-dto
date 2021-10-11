import { PlaceDTO } from '../../../general/dto/place.dto';
export declare class CORE_CreationEventCredentialSubjectDTO {
    productId: string;
    description: string;
    place: PlaceDTO;
    eventCreator: string;
}
export declare class AGENT_CreationEventCredentialSubjectDTO extends CORE_CreationEventCredentialSubjectDTO {
    eventId: string;
}
