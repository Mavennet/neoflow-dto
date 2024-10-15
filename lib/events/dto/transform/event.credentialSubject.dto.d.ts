import { OrganizationDTO, PlaceDTO } from '../../../general';
import { TRANSFORMATION_EVENT_TYPE } from '../../constants/transformationEventType';
export declare class AGENT_TransformationEventCredentialSubjectDTO {
    eventType: TRANSFORMATION_EVENT_TYPE;
    place: PlaceDTO;
    actor: OrganizationDTO[];
}
export declare class CORE_TransformationEventCredentialSubjectDTO extends AGENT_TransformationEventCredentialSubjectDTO {
    eventId: string;
    eventTime: string;
    products: string[];
    consumedProducts: string[];
}
