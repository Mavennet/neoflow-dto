import { COMPACT_OrganizationDTO, COMPACT_MeasurementDTO, COMPACT_ObservationDTO, COMPACT_PlaceDTO } from '../../../general';
import { STORAGE_EVENT_TYPE } from '../../constants';
import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { CORE_StorageEventDetailsDTO, AGENT_StorageEventDetailsDTO } from './event.vc.dto';
export declare class AGENT_COMPACT_StorageProductDTO {
    eventType: STORAGE_EVENT_TYPE;
    initiator: COMPACT_OrganizationDTO;
    place: COMPACT_PlaceDTO;
    storedWeight: COMPACT_MeasurementDTO;
    observation: COMPACT_ObservationDTO[];
}
export declare class CORE_StorageProductDTO {
    productId: string;
    eventId: string;
    eventVC: CORE_StorageEventDetailsDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
export declare class AGENT_StorageProductDTO extends CORE_StorageProductDTO {
    eventVC: AGENT_StorageEventDetailsDTO;
    productHash: string;
    storageCredentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
