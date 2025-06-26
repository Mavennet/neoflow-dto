import { TRANSPORT_EVENT_TYPE } from '../../constants';
import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_MeasurementDTO, COMPACT_PostalAddressDTO, WrappedEnvelopedVCDTO } from '../../../general';
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
export declare class TransportProductDataDto {
    batchNumber: string;
    shipper: string;
    pipeline: string;
    nominationMonth: string;
    commodity: string;
}
export declare class CORE_TransportProductDTO {
    productId: string;
    vc: WrappedEnvelopedVCDTO;
}
