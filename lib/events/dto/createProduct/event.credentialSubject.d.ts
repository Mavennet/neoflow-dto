import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
import { EVENT_TYPE } from '../../../events';
export declare class AGENT_CreationEventCredentialSubjectDTO {
    eventType: EVENT_TYPE;
    place: PlaceDTO;
    actor: OrganizationDTO[];
    products: ProductDTO[];
}
export declare class CORE_CreationEventCredentialSubjectDTO extends AGENT_CreationEventCredentialSubjectDTO {
    eventId: string;
    eventTime: string;
}
