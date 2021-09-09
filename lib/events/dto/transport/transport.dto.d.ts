import { TransportEventVCDTO, BillOfLadingVCDTO } from './event.vc.dto';
import { AGENT_TransportEventCredentialSubjectDTO, AGENT_BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EVENT_TYPE, TRANSPORT_TYPE } from '../../constants';
import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_MeasurementDTO, COMPACT_PostalAddressDTO } from '../../../general';
import { ProductBrief } from '../../../products';
export declare class AGENT_COMPACT_TransportStartDTO {
    eventType: TRANSPORT_TYPE;
    initiator: COMPACT_OrganizationDTO;
    product: ProductBrief;
    billOfLadingNumber: string;
    place: COMPACT_PlaceDTO;
}
export declare class AGENT_COMPACT_TransportEndDTO {
    productId: string;
    eventType: TRANSPORT_TYPE;
    initiator: COMPACT_OrganizationDTO;
    billOfLadingNumber: string;
    shippingDate: string;
    arrivalDate: string;
    expectedWeight: COMPACT_MeasurementDTO;
    deliveredWeight: COMPACT_MeasurementDTO;
    originAddress: COMPACT_PostalAddressDTO;
    deliveryAddress: COMPACT_PostalAddressDTO;
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
}
