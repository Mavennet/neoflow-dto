import { TRANSFORM_TYPE } from '../../constants';
import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_AddEntryDetailsCredentialSubjectDTO {
    eventId: string;
    eventTime: Date;
    eventType: TRANSFORM_TYPE;
    place: PlaceDTO;
    initiator: OrganizationDTO;
    product: ProductDTO;
    transactionNumber: string;
}
export declare class CORE_AddEntryDetailsCredentialSubjectDTO extends AGENT_AddEntryDetailsCredentialSubjectDTO {
    '@context': string[];
    type: string[];
    eventId: string;
    productId: string;
}
