import { EventDTO } from '../../../general';
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants';
export declare class TransportEventCredentialSubjectDTO extends EventDTO {
    eventType: TRANSPORT_EVENT_TYPE;
    deliveryMethod: TRANSPORTATION_TYPE;
}
