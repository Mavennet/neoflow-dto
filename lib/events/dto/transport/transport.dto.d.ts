import { TransportEventVCDTO, BillOfLadingVCDTO } from './event.vc.dto';
import { AGENT_TransportEventCredentialSubjectDTO, AGENT_BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EVENT_TYPE } from '../../constants';
export declare class AGENT_TransportProductDTO {
    eventType: EVENT_TYPE;
    productId: string;
    eventId: string;
    transportCredentialSubject: AGENT_TransportEventCredentialSubjectDTO;
    billOfLadingCredentialSubject?: AGENT_BillOfLadingCredentialSubjectDTO;
}
export declare class CORE_TransportProductDTO {
    productId: string;
    eventId: string;
    eventType: EVENT_TYPE;
    transportVC?: TransportEventVCDTO;
    bolVC?: BillOfLadingVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
