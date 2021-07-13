import { EVENT_TYPE } from '../../constants';
import { OrganizationDTO, ParcelDeliveryDTO } from '../../../general';
import { SteelProductDTO } from '../../../products';
export declare class AGENT_MillTestCredentialSubjectDTO {
    eventId: string;
    eventTime: Date;
    eventType: EVENT_TYPE;
    Certifier: string;
    manufacturer: OrganizationDTO;
    product: SteelProductDTO;
    shipment: ParcelDeliveryDTO;
}
export declare class CORE_MillTestCredentialSubjectDTO extends AGENT_MillTestCredentialSubjectDTO {
    '@context': string[];
    type: string[];
    eventId: string;
}
