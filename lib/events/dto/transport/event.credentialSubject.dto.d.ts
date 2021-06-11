import { EVENT_TYPE } from '../../constants';
import { PlaceDTO, ParcelDeliveryDTO, MeasurementDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_TransportEventCredentialSubjectDTO {
    eventId: string;
    productId: string;
    eventType: EVENT_TYPE;
    initiator: OrganizationDTO;
    eventTime: Date;
    place: PlaceDTO;
    product: ProductDTO;
    bol: string;
}
export declare class AGENT_BillOfLadingCredentialSubjectDTO {
    eventId: string;
    productId: string;
    eventType: EVENT_TYPE;
    initiator: OrganizationDTO;
    bol: string;
    shippingDate: string;
    arrivalDate: string;
    expectedWeight: MeasurementDTO;
    deliveredWeight: any;
    freight: ParcelDeliveryDTO;
}
export declare class CORE_TransportEventCredentialSubjectDTO extends AGENT_TransportEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
}
export declare class CORE_BillOfLadingCredentialSubjectDTO extends AGENT_BillOfLadingCredentialSubjectDTO {
    '@context': string[];
    type: string[];
}
