import { TransportationEventCredentialSubjectDTO, OGBillOfLadingCredentialSubjectDTO, TransportationEventDetailsDTO, OGBillOfLadingVCDTO } from './';
import { TRANSPORT_EVENT_TYPE } from '../../constants';
export declare class TransportProductDTO {
    productId: string;
    eventId: string;
    eventType: TRANSPORT_EVENT_TYPE;
    transportVC: TransportationEventDetailsDTO;
    bolVC: OGBillOfLadingVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    transportCredentialSubject: TransportationEventCredentialSubjectDTO;
    billOfLadingCredentialSubject: OGBillOfLadingCredentialSubjectDTO;
}
