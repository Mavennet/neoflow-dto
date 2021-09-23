import { AGENT_TransportationEventCredentialSubjectDTO, OGBillOfLadingCredentialSubjectDTO, CORE_TransportationEventDetailsDTO, OGBillOfLadingVCDTO } from './';
import { TRANSPORT_EVENT_TYPE } from '../../constants';
declare class TransportProductDTOBase {
    productId: string;
    eventId: string;
    eventType: TRANSPORT_EVENT_TYPE;
}
export declare class CORE_TransportProductDTO extends TransportProductDTOBase {
    transportVC: CORE_TransportationEventDetailsDTO;
    bolVC: OGBillOfLadingVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
export declare class AGENT_TransportProductDTO extends TransportProductDTOBase {
    transportCredentialSubject: AGENT_TransportationEventCredentialSubjectDTO;
    billOfLadingCredentialSubject: OGBillOfLadingCredentialSubjectDTO;
}
export {};
