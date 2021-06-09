import { TRANSFORM_TYPE } from '../../constants';
import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_TransformEventCredentialSubjectDTO {
    eventId: string;
    eventTime: Date;
    place: PlaceDTO;
    initiator: OrganizationDTO;
    newProduct: ProductDTO;
    consumedProducts: ProductDTO;
}
export declare class CORE_TransformEventCredentialSubjectDTO extends AGENT_TransformEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
    eventType: TRANSFORM_TYPE;
    eventId: string;
}
