import { TransportEventVCDTO, BillOfLadingVCDTO } from './event.vc.dto';
import { AGENT_TransportEventCredentialSubjectDTO, AGENT_BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EVENT_TYPE, TRANSPORT_TYPE } from '../../constants';
import { FLAT_OrganizationDTO, FLAT_PlaceDTO, FLAT_MeasurementDTO, FLAT_PostalAddressDTO } from '../../../general';
import { ProductBrief } from '../../../products';
export declare class AGENT_FLAT_TransportStartDTO {
    eventType: TRANSPORT_TYPE;
    initiator: FLAT_OrganizationDTO;
    product: ProductBrief;
    billOfLadingNumber: string;
    place: FLAT_PlaceDTO;
}
export declare class AGENT_FLAT_TransportEndDTO {
    productId: string;
    eventType: TRANSPORT_TYPE;
    initiator: FLAT_OrganizationDTO;
    billOfLadingNumber: string;
    shippingDate: string;
    arrivalDate: string;
    expectedWeight: FLAT_MeasurementDTO;
    deliveredWeight: FLAT_MeasurementDTO;
    originAddress: FLAT_PostalAddressDTO;
    deliveryAddress: FLAT_PostalAddressDTO;
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
