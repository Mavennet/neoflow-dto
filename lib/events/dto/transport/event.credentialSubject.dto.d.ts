import { EventDTO } from '../../../general';
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants';
export declare class AGENT_TransportationEventCredentialSubjectDTO {
    deliveryMethod: TRANSPORTATION_TYPE;
    batchNumber: string;
    scn: string;
}
export declare class CORE_TransportationEventCredentialSubjectDTO extends EventDTO {
    eventType: TRANSPORT_EVENT_TYPE;
    deliveryMethod: TRANSPORTATION_TYPE;
}
