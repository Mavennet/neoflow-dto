import { EventDTO, ProductHashDTO, PlaceDTO, OrganizationDTO } from '../../../general';
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants';
export declare class AGENT_TransportationEventCredentialSubjectDTO {
    eventType: TRANSPORT_EVENT_TYPE;
    place: PlaceDTO;
    actor: OrganizationDTO[];
    products: ProductHashDTO[];
    deliveryMethod: TRANSPORTATION_TYPE;
    trackingNumber?: string;
}
export declare class CORE_TransportationEventCredentialSubjectDTO extends EventDTO {
    eventType: TRANSPORT_EVENT_TYPE;
    deliveryMethod: TRANSPORTATION_TYPE;
}
