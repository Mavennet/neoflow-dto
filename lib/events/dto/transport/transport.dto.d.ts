import { TransportEventVCDTO, BillOfLadingVCDTO } from './event.vc.dto';
import { AGENT_TransportEventCredentialSubjectDTO, AGENT_BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EVENT_TYPE, TRANSPORT_TYPE } from '../../constants';
import { Organization, Place, Measurement, PostalAddress } from '../../../general';
import { ProductBrief } from '../../../products';
export declare class TransportStart {
    eventType: TRANSPORT_TYPE;
    initiator: Organization;
    product: ProductBrief;
    billOfLadingNumber: string;
    place: Place;
}
export declare class TransportEnd {
    productId: string;
    eventType: TRANSPORT_TYPE;
    initiator: Organization;
    billOfLadingNumber: string;
    shippingDate: string;
    arrivalDate: string;
    expectedWeight: Measurement;
    deliveredWeight: Measurement;
    originAddress: PostalAddress;
    deliveryAddress: PostalAddress;
    deliveryMethod?: string;
}
export declare class AGENT_TransportProductDTO {
    eventType: EVENT_TYPE;
    productId: string;
    eventId: string;
    transportCredentialSubject?: AGENT_TransportEventCredentialSubjectDTO;
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
