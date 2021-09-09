import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { StorageEventVCDTO } from './event.vc.dto';
import { COMPACT_OrganizationDTO, COMPACT_MeasurementDTO, COMPACT_ObservationDTO, COMPACT_PlaceDTO } from '../../../general';
import { ProductBrief } from '../../../products';
import { EVENT_TYPE, STORAGE_TYPE } from '../../constants';
export declare class AGENT_COMPACT_StoreProductDTO {
    eventType: STORAGE_TYPE;
    initiator: COMPACT_OrganizationDTO;
    place: COMPACT_PlaceDTO;
    product: ProductBrief;
    storedWeight: COMPACT_MeasurementDTO;
    observation: COMPACT_ObservationDTO[];
}
export declare class AGENT_StorageProductDTO {
    eventType: EVENT_TYPE;
    eventId: string;
    credentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
export declare class CORE_StorageProductDTO {
    productId: string;
    eventId: string;
    eventVC: StorageEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
