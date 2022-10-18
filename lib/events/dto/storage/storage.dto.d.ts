import { COMPACT_OrganizationDTO, COMPACT_MeasurementDTO, COMPACT_ObservationDTO, COMPACT_PlaceDTO } from '../../../general';
import { STORAGE_EVENT_TYPE } from '../../constants';
import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { CORE_StorageEventDetailsDTO } from './event.vc.dto';
export declare class AGENT_COMPACT_StorageProductDTO {
    eventType: STORAGE_EVENT_TYPE;
    initiator: COMPACT_OrganizationDTO;
    place: COMPACT_PlaceDTO;
    storedWeight: COMPACT_MeasurementDTO;
    observation: COMPACT_ObservationDTO[];
}
export declare class StorageProductDTOBase {
    productId: string;
    eventId: string;
}
export declare class CORE_StorageProductDTO extends StorageProductDTOBase {
    eventVC: CORE_StorageEventDetailsDTO;
}
export declare class AGENT_StorageProductDTO extends StorageProductDTOBase {
    productHash: string;
    storageCredentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
