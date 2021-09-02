import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { StorageEventVCDTO } from './event.vc.dto';
import { FLAT_OrganizationDTO, FLAT_MeasurementDTO, FLAT_ObservationDTO, FLAT_PlaceDTO } from '../../../general';
import { ProductBrief } from '../../../products';
import { EVENT_TYPE, STORAGE_TYPE } from '../../constants';
export declare class AGENT_FLAT_StoreProductDTO {
    eventType: STORAGE_TYPE;
    initiator: FLAT_OrganizationDTO;
    place: FLAT_PlaceDTO;
    product: ProductBrief;
    storedWeight: FLAT_MeasurementDTO;
    observation: FLAT_ObservationDTO[];
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
