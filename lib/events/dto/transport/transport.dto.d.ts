import { AGENT_TransportationEventCredentialSubjectDTO, OGBillOfLadingCredentialSubjectDTO } from '.';
import { TRANSPORT_EVENT_TYPE } from '../../constants';
import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_MeasurementDTO, COMPACT_PostalAddressDTO } from '../../../general';
import { EnvelopedVerifiableCredential } from '../../../credentials';
export declare class AGENT_COMPACT_TransportStartDTO {
    eventType: TRANSPORT_EVENT_TYPE;
    initiator: COMPACT_OrganizationDTO;
    billOfLadingNumber: string;
    place: COMPACT_PlaceDTO;
}
export declare class AGENT_COMPACT_TransportEndDTO {
    eventType: TRANSPORT_EVENT_TYPE;
    productId: string;
    initiator: COMPACT_OrganizationDTO;
    billOfLadingNumber: string;
    shippingDate: string;
    arrivalDate: string;
    expectedWeight: COMPACT_MeasurementDTO;
    deliveredWeight: COMPACT_MeasurementDTO;
    originAddress: COMPACT_PostalAddressDTO;
    deliveryAddress: COMPACT_PostalAddressDTO;
}
declare class TransportProductDTOBase {
    productId?: string;
    eventType: TRANSPORT_EVENT_TYPE;
}
export declare class CORE_TransportProductDTO extends TransportProductDTOBase {
    eventId: string;
    transportVC?: EnvelopedVerifiableCredential;
    bolVC?: EnvelopedVerifiableCredential;
}
export declare class AGENT_TransportProductDTO extends TransportProductDTOBase {
    transportCredentialSubject: AGENT_TransportationEventCredentialSubjectDTO;
    billOfLadingCredentialSubject?: OGBillOfLadingCredentialSubjectDTO;
}
export {};
