import { EVENT_TYPE } from '../../constants';
import { PlaceDTO, MeasurementDTO, ObservationDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_StorageEventCredentialSubjectDTO {
    eventId: string;
    eventType: EVENT_TYPE;
    eventTime: Date;
    initiator: OrganizationDTO;
    place: PlaceDTO;
    product: ProductDTO;
    storedWeight: MeasurementDTO;
    observations: ObservationDTO[];
}
export declare class CORE_StorageEventCredentialSubjectDTO extends AGENT_StorageEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
    eventId: string;
    productId: string;
}
