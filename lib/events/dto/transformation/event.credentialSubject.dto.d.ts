import { TRANSFORM_TYPE } from '../../constants';
import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_TransformEventCredentialSubjectDTO {
    eventId: string;
    eventTime: Date;
    eventType: TRANSFORM_TYPE;
    place: PlaceDTO;
    initiator: OrganizationDTO;
    newProduct: ProductDTO;
    consumedProducts: ProductDTO;
}
export declare class CORE_TransformEventCredentialSubjectDTO extends AGENT_TransformEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
    eventId: string;
}
