import { PlaceDTO, OrganizationDTO } from '../../../general';
import { TRANSFORMATION_EVENT_TYPE } from '../../constants/transformationEventType';
import { ProductDTO } from '../../../products';
export declare class AGENT_TransformationEventCredentialSubjectDTO {
    eventType: TRANSFORMATION_EVENT_TYPE;
    place: PlaceDTO;
    actor: OrganizationDTO[];
}
export declare class CORE_TransformationEventCredentialSubjectDTO extends AGENT_TransformationEventCredentialSubjectDTO {
    eventId: string;
    eventTime: string;
    products: ProductDTO[];
    consumedProducts: string[];
    newProducts: string[];
}
