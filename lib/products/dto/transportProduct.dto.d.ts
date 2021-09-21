import { TransportationEventCredentialSubjectDTO, OGBillOfLadingCredentialSubjectDTO, TransportationEventDetailsDTO, OGBillOfLadingVCDTO } from '../../events/dto';
import { TRANSPORT_EVENT_TYPE } from '../../events/constants';
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
